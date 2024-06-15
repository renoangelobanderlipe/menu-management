import { useState } from 'react';
import { Card, CardFooter } from '@material-tailwind/react';

import TableActions from './TableActionComponent';
import TableHeaderComponent from './TableHeaderComponent';
import TableBodyComponent from './TableBodyComponent';

import { GridDisplayComponent, PaginationComponent } from '../ui';

const TableMenuComponent = () => {
  const [activeDisplay, setActiveDisplay] = useState(false);

  return (
    <div>
      <Card className="gap-6 p-6" color="transparent">
        <div className="flex flex-col justify-between md:flex-row">
          {/* Display Table Actions */}
          <TableActions setActiveDisplay={setActiveDisplay} activeDisplay={activeDisplay} />
        </div>

        {/* Table Display */}
        <div className={`${activeDisplay ? 'hidden' : 'block'} w-full overflow-scroll p-0 lg:overflow-auto`}>
          <table className="overflow-x w-full min-w-max table-auto scroll-auto rounded-t-lg text-left">
            <TableHeaderComponent />
            <TableBodyComponent />
          </table>
        </div>

        {/* For Grid View */}
        <GridDisplayComponent activeDisplay={activeDisplay} />

        <CardFooter className="flex items-center justify-end border-t border-neutrals-200 p-0 pt-4 dark:border-neutrals-700">
          <PaginationComponent />
        </CardFooter>
      </Card>
    </div>
  );
};

export default TableMenuComponent;
