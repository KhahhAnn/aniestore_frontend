import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import TreemapModule from 'highcharts/modules/treemap';
import "./customTable.css"

// Initialize the treemap module
TreemapModule(Highcharts);

const DashboardComponent = () => {
   const [chartOptions1, setChartOptions1] = useState({});
   const [chartOptions2, setChartOptions2] = useState({});
   const [chartOptions3, setChartOptions3] = useState({});
   const [chartOptions4, setChartOptions4] = useState({});
   const [chartOptions5, setChartOptions5] = useState({});
   const [chartOptions6, setChartOptions6] = useState({});
   const [chartOptions7, setChartOptions7] = useState({});
   const [tableData, setTableData] = useState([]);

   useEffect(() => {
      // Define options for all charts
      setChartOptions1({
         chart: { type: 'column' },
         title: { text: 'Tỷ lệ tạm ngưng trong 4 tháng gần đây' },
         xAxis: { categories: ['T10', 'T9', 'T8', 'T7'] },
         yAxis: { min: 0, title: { text: 'Số lượng' } },
         series: [
            { name: 'SLTB tạm ngưng', data: [10, 9, 8, 7] },
            { name: 'Tỷ lệ tạm ngưng/PSC', type: 'line', data: [8.2, 9.5, 7.8, 7.2] }
         ]
      });

      setChartOptions2({
         chart: { type: 'pie' },
         title: { text: 'Trạng thái của TB FTTH' },
         series: [{ name: 'Trạng thái', colorByPoint: true, data: [{ name: 'Hoạt động', y: 61.41 }, { name: 'Chặn', y: 11.84 }, { name: 'Hủy', y: 10.85 }] }]
      });

      setChartOptions3({
         chart: { type: 'treemap' },
         title: { text: 'Nguyên nhân tạm ngưng' },
         series: [{ type: 'treemap', layoutAlgorithm: 'squarified', data: [{ name: 'Lý do chặn', value: 43 }, { name: 'Chuyển nhà', value: 24 }, { name: 'Không muốn tiếp tục', value: 12 }] }]
      });

      setChartOptions4({
         chart: { type: 'bar' }, // Assuming the fourth chart is a bar chart
         title: { text: 'Hành vi truy cập các OTT' },
         series: [{ name: 'OTT Data', data: [/* add relevant data */] }]
      });

      setChartOptions5({
         chart: { type: 'column' }, // Example: usage pattern chart
         title: { text: 'Hành vi xem trong 6 tháng trước tạm ngưng' },
         series: [{ name: 'View Behavior', data: [/* add relevant data */] }]
      });

      setChartOptions6({
         chart: { type: 'bubble' }, // Example: lag behavior
         title: { text: 'Hành vi giật lag 2 tháng trước tạm ngưng' },
         series: [{ name: 'Lag Behavior', data: [/* add bubble chart data */] }]
      });

      setChartOptions7({
         chart: { type: 'column' }, // Example: another column chart
         title: { text: 'Additional Chart Data' },
         series: [{ name: 'Additional Data', data: [/* add relevant data */] }]
      });

      // Sample table data
      setTableData([
         { package: 'FLEXIIP', sltb: 17069, psc: 396421, rate: '4.44%' },
         { package: 'FLEXIIP6', sltb: 15174, psc: 365539, rate: '4.15%' }
      ]);
   }, []);

   return (
      <div className="dashboard-container mt-20">
         {/* First row: 3 charts */}
         <div className="chart-row">
            <div className="chart chart-1">
               <HighchartsReact highcharts={Highcharts} options={chartOptions1} />
            </div>

            <div className="chart chart-2">
               <HighchartsReact highcharts={Highcharts} options={chartOptions2} />
            </div>

            <div className="chart chart-3">
               <HighchartsReact highcharts={Highcharts} options={chartOptions3} />
            </div>
         </div>

         {/* Second row: 4 charts */}
         <div className="chart-row">
            <div className="chart chart-4">
               <HighchartsReact highcharts={Highcharts} options={chartOptions4} />
            </div>

            <div className="chart chart-5">
               <HighchartsReact highcharts={Highcharts} options={chartOptions5} />
            </div>

            <div className="chart chart-6">
               <HighchartsReact highcharts={Highcharts} options={chartOptions5} />
            </div>

            <div className="table-container">
               <h3>Top 10 gói chiếm tỷ trọng cao nhất trong tổng TB tạm ngưng</h3>
               <table>
                  <thead>
                     <tr>
                        <th>Gói</th>
                        <th>SLTB tạm ngưng</th>
                        <th>Tỷ trọng TB PSC</th>
                        <th>Tỷ lệ tạm ngưng/PSC</th>
                     </tr>
                  </thead>
                  <tbody>
                     {tableData.map((row, index) => (
                        <tr key={index}>
                           <td>{row.package}</td>
                           <td>{row.sltb}</td>
                           <td>{row.psc}</td>
                           <td>{row.rate}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default DashboardComponent;
