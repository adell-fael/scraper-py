from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import os, time
from urllib.parse import urlparse

# Configure Chrome
chrome_options = Options()
chrome_options.add_argument("--headless")
chrome_options.add_argument("--disable-gpu")
chrome_options.add_argument("--no-sandbox")

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)
wait = WebDriverWait(driver, 15)

# Login
driver.get("https://tailwindcss.com/plus/login")
wait.until(EC.presence_of_element_located((By.ID, "email"))).send_keys("hado.ashkar@gmail.com")
driver.find_element(By.ID, "password").send_keys("savatage")
driver.find_element(By.CSS_SELECTOR, "button[type='submit']").click()
wait.until(EC.url_changes("https://tailwindcss.com/plus/login"))

# Array of target pages
target_pages = [
    "https://tailwindcss.com/plus/ui-blocks/ecommerce/components/store-navigation",
]

for target_page in target_pages:
    try:
        # Navigate to page
        print(f"\n➡️ Scraping page: {target_page}")
        driver.get(target_page)
        wait.until(EC.presence_of_all_elements_located((By.XPATH, "//button[contains(text(),'Code')]")))

        # Extract last part of the URL path for folder name
        last_segment = os.path.basename(urlparse(target_page).path.strip("/"))

        # Output directory
        output_dir = os.path.join("./src/scraped_components", last_segment)
        os.makedirs(output_dir, exist_ok=True)

        # Count total tabs
        num_tabs = len(driver.find_elements(By.XPATH, "//button[contains(text(),'Code')]"))
        print(f"Found {num_tabs} tabs on {last_segment}")

        for idx in range(num_tabs):
            try:
                # Re-find buttons each loop to avoid stale elements
                buttons = driver.find_elements(By.XPATH, "//button[contains(text(),'Code')]")
                btn = buttons[idx]
                driver.execute_script("arguments[0].scrollIntoView(true);", btn)
                wait.until(EC.element_to_be_clickable((By.XPATH, f"(//button[contains(text(),'Code')])[{idx+1}]")))
                btn.click()

                # Wait for the code block associated with this tab
                code_el = wait.until(EC.presence_of_element_located((By.XPATH, "(//pre/code)[last()]")))
                code_text = code_el.get_attribute("innerText")

                # Save file
                filename = f"component_{idx+1}.tsx"
                with open(os.path.join(output_dir, filename), "w", encoding="utf-8") as f:
                    f.write(code_text)
                print(f"✅ Saved {filename} in {last_segment}")

                time.sleep(1)  # small pause for DOM stability
            except Exception as e:
                print(f"⚠️ Tab {idx+1} error on {last_segment}:", e)

    except Exception as e:
        print(f"❌ Failed to process page {target_page}:", e)

driver.quit()
