import { cn } from "@/utils";

const RadioGroup = () => {
  const options = [
    {
      id: "pink",
      name: "Pink",
      classes: "bg-pink-500 checked:outline-pink-500",
    },
    {
      id: "purple",
      name: "Purple",
      classes: "bg-purple-500 checked:outline-purple-500",
    },
    {
      id: "blue",
      name: "Blue",
      classes: "bg-blue-500 checked:outline-blue-500",
    },
    {
      id: "green",
      name: "Green",
      classes: "bg-green-500 checked:outline-green-500",
    },
    {
      id: "yellow",
      name: "Yellow",
      classes: "bg-yellow-500 checked:outline-yellow-500",
    },
  ];
  return (
    <fieldset>
      <legend className="block text-sm/6 font-semibold text-gray-900">
        Choose a label color
      </legend>
      <div className="mt-6 flex items-center gap-x-3">
        {options.map((color) => (
          <div
            key={color.id}
            className="flex rounded-full outline -outline-offset-1 outline-black/10"
          >
            <input
              defaultValue={color.id}
              defaultChecked={color === options[0]}
              name="color"
              type="radio"
              aria-label={color.name}
              className={cn(
                color.classes,
                "size-8 appearance-none rounded-full forced-color-adjust-none checked:outline checked:outline-2 checked:outline-offset-2 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px]"
              )}
            />
          </div>
        ))}
      </div>
    </fieldset>
  );
}

export default RadioGroup;
