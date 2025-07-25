import { Paperclip } from "lucide-react";

const DescriptionList = () => {
  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base/7 font-semibold text-white">Applicant Information</h3>
        <p className="mt-1 max-w-2xl text-sm/6 text-gray-400">Personal details and application.</p>
      </div>
      <div className="mt-6 border-t border-white/10">
        <dl className="divide-y divide-white/10">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-100">Full name</dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">Margot Foster</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-100">Application for</dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">Backend Developer</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-100">Email address</dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-100">Salary expectation</dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">$120,000</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-100">About</dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-100">Attachments</dt>
            <dd className="mt-2 text-sm text-white sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-white/5 rounded-md border border-white/10">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    <Paperclip aria-hidden="true" className="size-5 shrink-0 text-gray-500" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium text-white">resume_back_end_developer.pdf</span>
                      <span className="shrink-0 text-gray-500">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0">
                    <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300">
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    <Paperclip aria-hidden="true" className="size-5 shrink-0 text-gray-500" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium text-white">coverletter_back_end_developer.pdf</span>
                      <span className="shrink-0 text-gray-500">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0">
                    <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default DescriptionList;
