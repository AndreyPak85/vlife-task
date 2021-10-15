export const Table_ = () => {
  return null;
};

// import { FC } from 'react';
// import {
//   useTable,
//   usePagination,
//   TableOptions,
//   TableInstance,
//   TableState,
//   HeaderGroupPropGetter,
// } from 'react-table';

// import { IUsersSlice } from '../../ts/users';

// interface ITableProps {
//   data: Array<IUsersSlice>;
//   columns: Array<IUsersSlice>;
// }

// export const Table: FC<ITableProps> = ({ data, columns }) => {
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     prepareRow,
//     page,
//     canPreviousPage,
//     canNextPage,
//     pageOptions,
//     pageCount,
//     gotoPage,
//     nextPage,
//     previousPage,
//     setPageSize,
//     state: { pageIndex, pageSize },
//   }: any = useTable<any>(
//     {
//       columns,
//       data,
//       initialState: { pageIndex: 0, pageSize: 5 },
//     },
//     usePagination
//   );

//   return (
//     <>
//       <table {...getTableProps()}>
//         <thead>
//           {headerGroups.map((headerGroup: HeaderGroupPropGetter<any>) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {page.map((row, i: number) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map((cell) => {
//                   return (
//                     <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                   );
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>

//       <div
//         className='pagination'
//         style={{ marginTop: '30px', position: 'absolute', right: '20px' }}
//       >
//         <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
//           {'<<'}
//         </button>
//         <button onClick={() => previousPage()} disabled={!canPreviousPage}>
//           {'<'}
//         </button>
//         <button onClick={() => nextPage()} disabled={!canNextPage}>
//           {'>'}
//         </button>
//         <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
//           {'>>'}
//         </button>
//         <span>
//           Page
//           <strong>
//             {pageIndex + 1} of {pageOptions.length}
//           </strong>
//         </span>
//         <span>
//           | Go to page:
//           <input
//             type='number'
//             defaultValue={pageIndex + 1}
//             onChange={(e) => {
//               const page = e.target.value ? Number(e.target.value) - 1 : 0;
//               gotoPage(page);
//             }}
//             style={{ width: '100px' }}
//           />
//         </span>
//         <select
//           value={pageSize}
//           onChange={(e) => {
//             setPageSize(Number(e.target.value));
//           }}
//         >
//           {[5].map((pageSize) => (
//             <option key={pageSize} value={pageSize}>
//               Show {pageSize}
//             </option>
//           ))}
//         </select>
//       </div>
//     </>
//   );
// };
