import React from 'react';
import Pagination from 'react-paginating';
import table from '../../Assets/data/table';
import './Table.css';

const filterList = [
    {
        value: "All",
        label: "All",
    },
    {
        value: "Reconciled",
        label: "Reconciled",
    },{
        value: "Un-reconciled",
        label: "Un-reconciled",
    },{
        value: "Settled",
        label: "Settled",
    },{
        value: "Un-settled",
        label: "Un-settled",
    },{
        value: "Pending",
        label: "Pending",
    }
];

const statusColors ={
    Reconciled: '#27AE60',
    'Un-reconciled': '#7F8FA4',
    Pending: '#EBC315',
    Settled: '#27AE60',
    'Un-settled': '#7F8FA4'
}
 
class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      items: table
    };
  }
 
  handlePageChange = (page, e) => {
    this.setState({
      currentPage: page
    });
  };
 
  changeFilter=(e)=>{
      console.log(e.target.value)
      const filter = e.target.value
      if(filter==="All"){
        this.setState({items: table})
          return;
      }
      const newItems = table.flat().filter(i=>i.status===filter)
      console.log(newItems)
      this.setState({items: [newItems]})
  }
  render() {
    const limit = 2;
    const pageCount = 3;
    const total = this.state.items.length * limit;
    const { currentPage } = this.state;
    const inputvalue = { onChange: this.changeFilter };
    console.log("filterList: ",filterList)
    return (
      <div className="payment-section">
        <span>Payment</span><br />
        <span>Show&emsp;</span>
        <select defaultValue={filterList[0]} onChange={this.changeFilter} className="select-filter">
            {filterList.map((item,key)=><option value={item.value} key={key}>{item.label}</option>)}
        </select>
        
        <table>
            <thead>
                <tr className="table-head">
                    <th>Item Type</th>
                    <th>Price</th>
                    <th>Transaction no</th>
                    <th>Time</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
            {
                this.state.items[currentPage-1].map((item,index)=>(
                <tr key={index}>
                    <td>
                        <div>VW</div>
                        {item.type}
                    </td>
                    <td>
                        {item.price}
                    </td>
                    <td>
                        {item.transactionNo}
                    </td>
                    <td>
                        {item.time}
                    </td>
                    <td> 
                        <div className="status" style={{color: statusColors[item.status]}}>
                            <div className="stats-icon"  style={{ backgroundColor: statusColors[item.status] }} />&nbsp;
                            {item.status}
                        </div>
                        <i className="fa fa-caret-down" />
                    </td>
                </tr>
                ))
            }
            </tbody>
        </table>
        <Pagination
          total={total}
          limit={limit}
          pageCount={pageCount}
          currentPage={currentPage}
        >
          {({
            pages,
            currentPage,
            hasNextPage,
            hasPreviousPage,
            previousPage,
            nextPage,
            totalPages,
            getPageItemProps
          }) => (
            <div className="pagination-btn">
              {/* <button
                {...getPageItemProps({
                  pageValue: 1,
                  onPageChange: this.handlePageChange
                })}
                className="page-btn"
              >
                First
              </button> */}
 
              {hasPreviousPage && (
                <button
                className="page-btn"
                  {...getPageItemProps({
                    pageValue: previousPage,
                    onPageChange: this.handlePageChange
                  })}
                >
                Previous
                  {/* {'<'} */}
                </button>
              )}
 
              {pages.map(page => {
                let activePage = null;
                if (currentPage === page) {
                  activePage = { backgroundColor: '#1875F0', color: '#FFFFFF' };
                }
                return (
                  <button
                    className="num-btn"
                    {...getPageItemProps({
                      pageValue: page,
                      key: page,
                      style: activePage,
                      onPageChange: this.handlePageChange
                    })}
                  >
                    {page}
                  </button>
                );
              })}
 
              {hasNextPage && (
                <button
                className="page-btn"
                  {...getPageItemProps({
                    pageValue: nextPage,
                    onPageChange: this.handlePageChange
                  })}
                >
                    Next
                  {/* {'>'} */}
                </button>
              )}
 
              {/* <button
                {...getPageItemProps({
                  pageValue: totalPages,
                  onPageChange: this.handlePageChange
                })}
              >
                last
              </button> */}
            </div>
          )}
        </Pagination>
      </div>
    );
  }
}
 
export default Table