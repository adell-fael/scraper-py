import { FC } from 'react';
import { Database, FilePlus, Code, CheckCircle } from 'lucide-react';

const DatabaseMigrationStatus: FC = () => {
  const progressWidth = '37.5%';

  return (
    <div>
      <h4 className="sr-only">Status</h4>
      <p className="text-sm font-medium text-gray-900">Migrating MySQL database...</p>
      <div aria-hidden="true" className="mt-6">
        <div className="overflow-hidden rounded-full bg-gray-200">
          <div style={{ width: progressWidth }} className="h-2 rounded-full bg-indigo-600" />
        </div>
        <div className="mt-6 hidden grid-cols-4 text-sm font-medium text-gray-600 sm:grid">
          <div className="text-indigo-600"><FilePlus /> Copying files</div>
          <div className="text-center text-indigo-600"><Database /> Migrating database</div>
          <div className="text-center"><Code /> Compiling assets</div>
          <div className="text-right"><CheckCircle /> Deployed</div>
        </div>
      </div>
    </div>
  )
}

export default DatabaseMigrationStatus;