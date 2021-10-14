export const Table_ = () => {
  return null;
};

// import { useMemo } from 'react';
// import { useTable, usePagination } from 'react-table';
// import { useSelector, RootStateOrAny } from 'react-redux';

// import { IUsersSlice } from '../../ts/users';

// export const Table = () => {
//   const users = useSelector((state: RootStateOrAny) => state.users.users);

//   const columns: Array<any> = useMemo(
//     () => [
//       { Header: '', accessor: 'checkbox' },
//       { Header: 'ID', accessor: 'id' },
//       { Header: '', accessor: 'more' },
//       { Header: 'Username', accessor: 'username' },
//       { Header: 'Email', accessor: 'email' },
//       { Header: 'Website', accessor: 'website' },
//       { Header: '', accessor: 'delete' },
//     ],
//     []
//   );

//   let data = users.map((item: IUsersSlice) => {
//     return {
//       checkbox: <input type='checkbox' />,
//       id: item.id,
//       more: <a href='/users/'>more</a>,
//       username: item.username,
//       email: item.email,
//       website: item.website,
//       delete: <button>delete</button>,
//     };
//   });

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     prepareRow,
//     page, // Instead of using 'rows', we'll use page,
//     // which has only the rows for the active page

//     // The rest of these things are super handy, too ;)
//     canPreviousPage,
//     canNextPage,
//     pageOptions,
//     pageCount,
//     gotoPage,
//     nextPage,
//     previousPage,
//     setPageSize,
//     state: { pageIndex, pageSize },
//   } = useTable<any>(
//     {
//       columns,
//       data,
//       initialState: { pageIndex: 2 },
//     },
//     usePagination
//   );

//   return (
//     <>
//       <table {...getTableProps()}>
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {page.map((row, i) => {
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

//       <div className='pagination'>
//         <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
//           {'<<'}
//         </button>{' '}
//         <button onClick={() => previousPage()} disabled={!canPreviousPage}>
//           {'<'}
//         </button>{' '}
//         <button onClick={() => nextPage()} disabled={!canNextPage}>
//           {'>'}
//         </button>{' '}
//         <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
//           {'>>'}
//         </button>{' '}
//         <span>
//           Page{' '}
//           <strong>
//             {pageIndex + 1} of {pageOptions.length}
//           </strong>{' '}
//         </span>
//         <span>
//           | Go to page:{' '}
//           <input
//             type='number'
//             defaultValue={pageIndex + 1}
//             onChange={(e) => {
//               const page = e.target.value ? Number(e.target.value) - 1 : 0;
//               gotoPage(page);
//             }}
//             style={{ width: '100px' }}
//           />
//         </span>{' '}
//         <select
//           value={pageSize}
//           onChange={(e) => {
//             setPageSize(Number(e.target.value));
//           }}
//         >
//           {[10, 20, 30, 40, 50].map((pageSize) => (
//             <option key={pageSize} value={pageSize}>
//               Show {pageSize}
//             </option>
//           ))}
//         </select>
//       </div>
//     </>
//   );
// };
