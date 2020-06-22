import React, { Component } from 'react';
import { Table, Button } from 'antd';
import moment from 'moment';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
//import pdfFonts from 'pdfmake/build/vfs_fonts';
import pdfFonts from '../../example/fonts/vfs_fonts';
//console.log(pdfFonts);
pdfMake.vfs = pdfFonts.pdfMake.vfs;
//console.log(pdfFonts);
const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '১০ ডাউনিং স্ট্রিট'
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '১০ ডাউনিং স্ট্রিট'
  }
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  }
];
const tableBody = dataRows => {
  let body = [];
  console.log(dataRows);
  dataRows.forEach((row, index) => {
    let tableRow = [];
    tableRow.push(
      { text: row.sl, alignment: 'center' },
      { text: row.name, alignment: 'left' },
      { text: row.age, alignment: 'center' },
      { text: row.address, alignment: 'center' }
    );
    body.push(tableRow);
  });
  console.log(body);
  return body;
};
//   function downloadParticipant(record) {
//     let k = [];
//     k.push(record);
//     const printData = tableBody(k);
//     var dd = PrintParticipantPdf(printData, record.name);
//     pdfMake.createPdf(dd).download(`Report_Of_${record.name}`);
//   };
function print() {
  const reportDate = moment().format('LLL');
  const printData = tableBody(dataSource);
  // console.log(printData);
  pdfMake.fonts = {
    kalpurush: {
      normal: 'kalpurush.ttf',
      bold: 'kalpurush.ttf',
      italics: 'kalpurush.ttf',
      bolditalics: 'kalpurush.ttf'
    }
  };
  var dd = {
    pageSize: 'A4',
    footer: (currentPage, pageCount) => {
      return {
        text: `Page ${currentPage.toString()} of ${pageCount.toString()}`,
        alignment: 'center',
        fontSize: 9
      };
    },
    // by default we use portrait, you can change it to landscape if you wish
    pageOrientation: 'landscape',
    // [left, top, right, bottom] or [horizontal, vertical] or just a number for equalcenterins
    pageMargins: [30, 70, 30, 30],
    header: [
      {
        margin: [30, 20, 30, 0],
        text: 'Event List',
        fontSize: 20,
        lineHeight: 1.1,
        alignment: 'center',
        decoration: 'underline'
      }
    ],
    content: [
      'বাংলা',
      {
        margin: [0, 0, 0, 5],
        text: [
          {
            text: 'Searched with: ',
            fontSize: 14,
            lineHeight: 1.1,
            bold: true,
            decoration: 'underline'
          },
          {
            text: 'All',
            fontSize: 14,
            lineHeight: 1.1
          }
        ]
      },
      {
        margin: [0, 0, 0, 15],
        text: [
          {
            text: 'Reporting Time ',
            fontSize: 14,
            lineHeight: 1.1,
            bold: true,
            decoration: 'underline'
          },
          {
            text: ': ' + reportDate,
            fontSize: 14,
            lineHeight: 1.1
          }
        ]
      },
      {
        style: 'tableCenter',
        table: {
          widths: ['5%', '12%', '12%', '*'],
          body: [
            [
              {
                text: 'Sl. No.',
                rowSpan: 2,
                bold: true,
                alignment: 'center',
                margin: [0, 7, 0, 0]
              },
              {
                text: 'Name',
                rowSpan: 2,
                bold: true,
                alignment: 'center',
                margin: [0, 7, 0, 0]
              },
              {
                text: 'Age',
                rowSpan: 2,
                bold: true,
                alignment: 'center',
                margin: [0, 7, 0, 0]
              },
              {
                text: 'Address',
                rowSpan: 2,
                bold: true,
                alignment: 'center',
                margin: [0, 7, 0, 0]
              }
            ],
            [{}, {}, {}, {}],
            ...printData
          ]
        }
      }
    ],
    styles: {
      headerLeftColumn: {
        alignment: 'right'
      }
    },
    defaultStyle: {
      font: 'kalpurush'
    }
  };

  console.log(dd);
  // pdfMake.fonts = {
  //   AdorshoLipi: {
  //     normal: 'AdorshoLipi.ttf',
  //     bold: 'AdorshoLipi.ttf',
  //     italics: 'AdorshoLipi.ttf',
  //     bolditalics: 'AdorshoLipi.ttf'
  //   }
  // };
  pdfMake.createPdf(dd).download(`Event_List_Report_${reportDate}`);
}
export default class ProductList extends Component {
  render() {
    return (
      <div>
        <Button onClick={print}>Print</Button>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}
