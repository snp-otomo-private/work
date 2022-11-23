

// Log to console
console.log("source data")
console.log(data)


class FieldNameMapping{
     constructor(){
      this.cols = new Array();
      this.cols.push(new this.FieldNames("colkey1","colval1","colsort1"));
      this.cols.push(new this.FieldNames("colkey2","colval2","colsort2"))

      this.rows = new Array();
      this.rows.push(new this.FieldNames("rowkey1","rowval1","rowsort1"));
      this.rows.push(new this.FieldNames("rowkey2","rowval2","rowsort2"));
   }
   FieldNames = class{
      constructor(key,val,sort){
           this.key = key;
           this.val = val;
           this.sort = sort;
      }
   }
}


console.log(new FieldNameMapping());
class Matrix{
  constructor(data){
    this.originalData = data;
    this.colLabels = this.getColLabels();
    this.rowLabels = this.getRowLabels();
  }

  //列ラベル取得
  getColLabels = function(){
     return this.generateElements(new FieldNameMapping().cols);
  }

  //行ラベル取得
  getRowLabels = function(){
      return this.generateElements(new FieldNameMapping().rows);
  }
  
  generateElements(fieldsData){
      let r = new Array();
      data.forEach(d =>{
         let e = this.generateElement(d,fieldsData)
         if(this.isPushedElement(r,e)){return};
         r.push(e)
      });
      //ソートして戻す
      return this.sortLabelElement(r);
  }

  generateElement(d,fieldsData){
         let e = {};
         fieldsData.forEach((f,index) =>{
                       let num = index + 1;
                       e["key" + num] = d[f.key]
                       e["val" + num] = d[f.val]
                       e["sort" + num] = d[f.sort]
                     });
   return e;
  }


  //すでに配列に追加されている要素か
  isPushedElement(aray,elememt){
     for(var i=0;i<aray.length;i++){
           var pudhed_e = aray[i];
           if(JSON.stringify(Object.entries(elememt).sort()) == JSON.stringify(Object.entries(pudhed_e).sort())){
              return true;
             }
       
      }
     return false;
  }
  
  sortLabelElement(array){
      return array.sort((a,b)=>{
                           if(a.sort1 != b.sort1){
                             return a.sort1 < b.sort1 ? -1 : 1;
                           }
                           if(a.sort2 != b.sort2){
                             return a.sort2 < b.sort2 ? -1 : 1; 
                           }
                           return 0;
                          });
   
  }
}


console.log("data")
console.log(new Matrix(data))