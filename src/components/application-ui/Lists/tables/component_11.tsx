import { cn } from "@/utils";

const TableView = () => {
  const people = [
    {
      name: "Lindsay Walton",
      title: "Front-end Developer",
      email: "lindsay.walton@example.com",
      role: "Member",
    },
    {
      name: "Courtney Henry",
      title: "Designer",
      email: "courtney.henry@example.com",
      role: "Admin",
    },
    {
      name: "Tom Cook",
      title: "Director of Product",
      email: "tom.cook@example.com",
      role: "Member",
    },
    {
      name: "Whitney Francis",
      title: "Copywriter",
      email: "whitney.francis@example.com",
      role: "Admin",
    },
    {
      name: "Leonard Krasner",
      title: "Senior Designer",
      email: "leonard.krasner@example.com",
      role: "Owner",
    },
    {
      name: "Floyd Miles",
      title: "Principal Designer",
      email: "floyd.miles@example.com",
      role: "Member",
    },
    {
      name: "Emily Selman",
      title: "VP, User Experience",
      email: "emily.selman@example.com",
      role: "Member",
    },
    {
      name: "Kristin Watson",
      title: "VP, Human Resources",
      email: "kristin.watson@example.com",
      role: "Admin",
    },
    {
      name: "Emma Dorsey",
      title: "Senior Developer",
      email: "emma.dorsey@example.com",
      role: "Member",
    },
    {
      name: "Alicia Bell",
      title: "Junior Copywriter",
      email: "alicia.bell@example.com",
      role: "Admin",
    },
    {
      name: "Jenny Wilson",
      title: "Studio Artist",
      email: "jenny.wilson@example.com",
      role: "Owner",
    },
    {
      name: "Anna Roberts",
      title: "Partner, Creative",
      email: "anna.roberts@example.com",
      role: "Member",
    },
    {
      name: "Benjamin Russel",
      title: "Director, Print Operations",
      email: "benjamin.russel@example.com",
      role: "Member",
    },
    {
      name: "Jeffrey Webb",
      title: "Senior Art Director",
      email: "jeffrey.webb@example.com",
      role: "Admin",
    },
    {
      name: "Kathryn Murphy",
      title: "Associate Creative Director",
      email: "kathryn.murphy@example.com",
      role: "Member",
    },
  ];
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <table className="min-w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white/75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                  >
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {people.map((person, personIdx) => (
                  <tr key={person.email}>
                    <td
                      className={cn(
                        personIdx !== people.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                      )}
                    >
                      {person.name}
                    </td>
                    <td
                      className={cn(
                        personIdx !== people.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell"
                      )}
                    >
                      {person.title}
                    </td>
                    <td
                      className={cn(
                        personIdx !== people.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell"
                      )}
                    >
                      {person.email}
                    </td>
                    <td
                      className={cn(
                        personIdx !== people.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      )}
                    >
                      {person.role}
                    </td>
                    <td
                      className={cn(
                        personIdx !== people.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-8 lg:pr-8"
                      )}
                    >
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit<span className="sr-only">, {person.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableView;
