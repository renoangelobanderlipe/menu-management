import { useState } from 'react'
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
        <div className="md:flex-row flex flex-col justify-between">
          {/* Display Table Actions */}
          <TableActions
            setActiveDisplay={setActiveDisplay}
            activeDisplay={activeDisplay}
          />
        </div>

        {/* Table Display */}
        <div
          className={`${activeDisplay ? "hidden" : "block"} w-full overflow-scroll p-0 lg:overflow-auto`}
        >
          <table className="overflow-x min-w-max scroll-auto w-full text-left rounded-t-lg table-auto">
            <TableHeaderComponent />
            <TableBodyComponent />
          </table>
        </div>

        {/* For Grid View */}
        <GridDisplayComponent activeDisplay={activeDisplay} />

        <CardFooter className="border-neutrals-200 dark:border-neutrals-700 flex items-center justify-end p-0 pt-4 border-t">
          <PaginationComponent />
        </CardFooter>
      </Card>
    </div>
  )
}

export default TableMenuComponent
