

// Log to console
console.log("source data")
console.log(data)


class FieldNameMapping{
     constructor(){
      this.id = "id";
      this.value = "value";
      this.cols = new Array();
      //col1設定
      this.cols.push(new this.FieldNames("colkey1","colval1","colsort1"));
      //col2設定
　　　this.cols.push(new this.FieldNames("colkey2","colval2","colsort2"))

      this.rows = new Array();
　　　//row1設定
      this.rows.push(new this.FieldNames("rowkey1","rowval1","rowsort1"));
      //row2設定
      this.rows.push(new this.FieldNames("rowkey2","rowval2","rowsort2"));
   }
   FieldNames = class{
      constructor(key,label,sort){
           this.key = key;
           this.label = label;
           this.sort = sort;
      }
   }
}


console.log(new FieldNameMapping());
class Matrix{
  constructor(data){
    this.originalData = data;
    this.fm = new FieldNameMapping();

    this.renamedData = this.#rename(data);
    this.colLabels = this.#getColLabels();
    this.rowLabels = this.#getRowLabels();
    
    this.rows = this.#getRows();
  }

  //規則的なフィールド名のデータに変換
  #rename = function(data){
    return data.map(d=>{
             let e  = {};
             let fm = this.fm;
              e.id = d[fm.id]
              e.value = d[fm.value]
             
              fm.cols.forEach((c,index)=>{
                     let num = index + 1;
                     e["colkey" + num] = d[c.key]
                     e["collabel" + num] = d[c.label]
                     e["colsort" + num] = d[c.sort]
                   })
              fm.rows.forEach((r,index)=>{
                     let num = index + 1;
                     e["rowkey" + num] = d[r.key]
                     e["rowlabel" + num] = d[r.label]
                     e["rowsort" + num] = d[r.sort]
                   })
             return e;
           })
  }

  //列ラベル取得
  #getColLabels = function(){
     return this.#generateElements(this.fm.cols);
  }

  //行ラベル取得
  #getRowLabels = function(){
      return this.#generateElements(this.fm.rows);
  }

  //行データ
  #getRows = function(){
      let rows = new Array(); 
      this.colLabels
      .forEach(c=>{
         //一行ごとのデータ        
         rows.push(this.#generateRowData(c));       
      })
      return rows;
  }

  //一行ごとのデータ
  #generateRowData(c){
    let row = new Array();
        this.rowLabels               
        .forEach(r=>{
          let targets = this.renamedData.filter(d=>{
                       let isMatch = true;
                       let fm = this.fm;
                        fm.cols.forEach((hoge,index)=> isMatch = isMatch && d["colkey" + (index + 1)] == c["key" + (index + 1)]);
                        fm.rows.forEach((hoge,index)=> isMatch = isMatch && d["rowkey" + (index + 1)] == r["key" + (index + 1)]);
                       return isMatch;
                     });
          row.push(targets.length == 0 ? null:{id:targets[0].id,value:targets[0].value});
        })
    return row;
  }

  
  #generateElements(fieldsData){
      let r = new Array();
      data.forEach(d =>{
         let e = this.#generateElement(d,fieldsData)
         if(this.#isPushedElement(r,e)){return};
         r.push(e)
      });
      //ソートして戻す
      return this.#sortLabelElement(r);
  }

  #generateElement(d,fieldsData){
         let e = {};
         fieldsData.forEach((f,index) =>{
                       let num = index + 1;
                       e["key" + num] = d[f.key]
                       e["label" + num] = d[f.label]
                       e["sort" + num] = d[f.sort]
                     });
   return e;
  }


  //すでに配列に追加されている要素か
  #isPushedElement(aray,elememt){
     for(var i=0;i<aray.length;i++){
           var pudhed_e = aray[i];
           if(JSON.stringify(Object.entries(elememt).sort()) == JSON.stringify(Object.entries(pudhed_e).sort())){
              return true;
             }
       
      }
     return false;
  }
  
  #sortLabelElement(array){
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