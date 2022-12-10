/*
  [   ,    ,上,上,中,中,下]
  [   ,    ,甲,丁,乙,丙,丁]
  [ A ,いち,○,  ,　,　,　]
  [ A ,に  ,　,  ,○,　,　]
　[ B ,さん,　,  ,　,○,　]
　[ B ,し  ,　,○,　,　,○]
  [ C ,いち,　,○,　,　,　]
*/
const data = [
 {id:"id1",rowkey1:"a",rowval1:"A",rowsort1:1,rowkey2:"1",rowval2:"いち",rowsort2:1,colkey1:"zyou",colval1:"上",colsort1:1,colkey2:"kou",colval2:"甲",colsort2:1}
 ,{id:"id2",rowkey1:"a",rowval1:"A",rowsort1:1,rowkey2:"2",rowval2:"に",rowsort2:2,colkey1:"chu",colval1:"中",colsort1:2,colkey2:"otsu",colval2:"乙",colsort2:2}
 ,{id:"id3",rowkey1:"b",rowval1:"B",rowsort1:2,rowkey2:"3",rowval2:"さん",rowsort2:3,colkey1:"chu",colval1:"中",colsort1:2,colkey2:"hei",colval2:"丙",colsort2:3}
 ,{id:"id4",rowkey1:"b",rowval1:"B",rowsort1:2,rowkey2:"4",rowval2:"し",rowsort2:4,colkey1:"ge",colval1:"下",colsort1:3,colkey2:"tei",colval2:"丁",colsort2:4}

 ,{id:"id5",rowkey1:"b",rowval1:"B",rowsort1:2,rowkey2:"4",rowval2:"し",rowsort2:4,colkey1:"zyou",colval1:"上",colsort1:1,colkey2:"tei",colval2:"丁",colsort2:4}
 ,{id:"id6",rowkey1:"c",rowval1:"C",rowsort1:3,rowkey2:"1",rowval2:"いち",rowsort2:1,colkey1:"zyou",colval1:"上",colsort1:1,colkey2:"tei",colval2:"丁",colsort2:4,value:"値"}
]