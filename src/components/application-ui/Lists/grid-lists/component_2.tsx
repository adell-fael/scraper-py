import { Mail, PhoneIcon } from "lucide-react";

const GridList = () => {
  const people = [
    {
      name: "Jane Cooper",
      title: "Paradigm Representative",
      role: "Admin",
      email: "janecooper@example.com",
      telephone: "+1-202-555-0170",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Cody Fisher",
      title: "Lead Security Associate",
      role: "Admin",
      email: "codyfisher@example.com",
      telephone: "+1-202-555-0114",
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Esther Howard",
      title: "Assurance Administrator",
      email: "estherhoward@example.com",
      telephone: "+1-202-555-0143",
      role: "Admin",
      imageUrl:
        "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Jenny Wilson",
      title: "Chief Accountability Analyst",
      role: "Admin",
      email: "jennywilson@example.com",
      telephone: "+1-202-555-0184",
      imageUrl:
        "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Kristin Watson",
      title: "Investor Data Orchestrator",
      role: "Admin",
      email: "kristinwatson@example.com",
      telephone: "+1-202-555-0191",
      imageUrl:
        "https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Cameron Williamson",
      title: "Product Infrastructure Executive",
      role: "Admin",
      email: "cameronwilliamson@example.com",
      telephone: "+1-202-555-0108",
      imageUrl:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Courtney Henry",
      title: "Investor Factors Associate",
      role: "Admin",
      email: "courtneyhenry@example.com",
      telephone: "+1-202-555-0104",
      imageUrl:
        "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Theresa Webb",
      title: "Global Division Officer",
      role: "Admin",
      email: "theresawebb@example.com",
      telephone: "+1-202-555-0138",
      imageUrl:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
  ];
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {people.map((person) => (
        <li
          key={person.email}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <img
              alt=""
              src={person.imageUrl}
              className="mx-auto size-32 shrink-0 rounded-full"
            />
            <h3 className="mt-6 text-sm font-medium text-gray-900">
              {person.name}
            </h3>
            <dl className="mt-1 flex grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500">{person.title}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {person.role}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href={`mailto:${person.email}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <Mail aria-hidden="true" className="size-5 text-gray-400" />
                  Email
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`tel:${person.telephone}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <PhoneIcon
                    aria-hidden="true"
                    className="size-5 text-gray-400"
                  />
                  Call
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GridList;
