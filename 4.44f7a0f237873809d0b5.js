(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Iab2:function(t,e,a){var n,i;void 0===(i="function"==typeof(n=function(){"use strict";function e(t,e,a){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){c(n.response,e,a)},n.onerror=function(){console.error("could not download file")},n.send()}function a(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function n(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(a)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,o=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!o?function(t,o,c){var l=i.URL||i.webkitURL,b=document.createElement("a");b.download=o=o||t.name||"download",b.rel="noopener","string"==typeof t?(b.href=t,b.origin===location.origin?n(b):a(b.href)?e(t,o,c):n(b,b.target="_blank")):(b.href=l.createObjectURL(t),setTimeout(function(){l.revokeObjectURL(b.href)},4e4),setTimeout(function(){n(b)},0))}:"msSaveOrOpenBlob"in navigator?function(t,i,o){if(i=i||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,o),i);else if(a(t))e(t,i,o);else{var c=document.createElement("a");c.href=t,c.target="_blank",setTimeout(function(){n(c)})}}:function(t,a,n,c){if((c=c||open("","_blank"))&&(c.document.title=c.document.body.innerText="downloading..."),"string"==typeof t)return e(t,a,n);var l="application/octet-stream"===t.type,b=/constructor/i.test(i.HTMLElement)||i.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||l&&b||o)&&"undefined"!=typeof FileReader){var r=new FileReader;r.onloadend=function(){var t=r.result;t=s?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),c?c.location.href=t:location=t,c=null},r.readAsDataURL(t)}else{var d=i.URL||i.webkitURL,u=d.createObjectURL(t);c?c.location=u:location.href=u,c=null,setTimeout(function(){d.revokeObjectURL(u)},4e4)}});i.saveAs=c.saveAs=c,t.exports=c})?n.apply(e,[]):n)||(t.exports=i)},jkDv:function(t,e,a){"use strict";a.r(e),a.d(e,"AdminModule",function(){return L});var n=a("ofXK"),i=a("fXoL"),o=a("/t3+"),c=a("bTqV"),l=a("NFeN"),b=a("XhcP"),s=a("MutI"),r=a("tyNb"),d=a("FKr1");let u=(()=>{class t{constructor(){}ngOnInit(){this.checkLogin()}checkLogin(){this.api.get("bookswithauth/status").subscribe(t=>{},t=>{this.router.navigate(["/login"])})}logout(){confirm("Keluar aplikasi?")&&(localStorage.removeItem("appToken"),window.location.reload())}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Hb({type:t,selectors:[["app-admin"]],decls:30,vars:8,consts:[["color","primary",1,"example-header"],["mat-icon-button","",3,"click"],[1,"uk-width-expand"],["mat-button","",3,"click"],[1,"example-container"],["mode","side","opened","",1,"sidenav-left",3,"position","fixedInViewport","fixedTopGap","fixedBottomGap"],["sidenav",""],["routerLink","/admin/dashboard"],["matListIcon",""],["matLine",""],["routerLink","/admin/product"],["mode","side",1,"example-sidenav",3,"position","fixedInViewport","fixedTopGap","fixedBottomGap"],[2,"padding","20px","background-color","rgb(202, 194, 194)"]],template:function(t,e){if(1&t){const t=i.Ub();i.Rb(0),i.Tb(1,"mat-toolbar",0),i.Tb(2,"button",1),i.ac("click",function(){return i.qc(t),i.oc(14).toggle()}),i.Tb(3,"mat-icon"),i.xc(4,"menu"),i.Sb(),i.Sb(),i.Tb(5,"span"),i.xc(6,"MyPrakTekWeb "),i.Sb(),i.Ob(7,"div",2),i.Tb(8,"small"),i.xc(9,"Admin"),i.Sb(),i.Tb(10,"button",3),i.ac("click",function(){return e.logout()}),i.xc(11,"Logout"),i.Sb(),i.Sb(),i.Tb(12,"mat-sidenav-container",4),i.Tb(13,"mat-sidenav",5,6),i.Tb(15,"mat-nav-list"),i.Tb(16,"mat-list-item",7),i.Tb(17,"mat-icon",8),i.xc(18,"dashboard"),i.Sb(),i.Tb(19,"h3",9),i.xc(20,"Dashboard"),i.Sb(),i.Sb(),i.Tb(21,"mat-list-item",10),i.Tb(22,"mat-icon",8),i.xc(23,"camera_enhance"),i.Sb(),i.Tb(24,"h3",9),i.xc(25,"Products"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Ob(26,"mat-sidenav",11,6),i.Tb(28,"mat-sidenav-content",12),i.Ob(29,"router-outlet"),i.Sb(),i.Sb(),i.Qb()}2&t&&(i.Cb(13),i.jc("position","start")("fixedInViewport",!0)("fixedTopGap",65)("fixedBottomGap",0),i.Cb(13),i.jc("position","end")("fixedInViewport",!0)("fixedTopGap",60)("fixedBottomGap",0))},directives:[o.a,c.a,l.a,b.b,b.a,s.d,s.b,r.b,s.a,d.j,b.c,r.d],styles:[""]}),t})(),p=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Hb({type:t,selectors:[["app-dashboard"]],decls:2,vars:0,template:function(t,e){1&t&&(i.Tb(0,"p"),i.xc(1,"dashboard works!"),i.Sb())},styles:[""]}),t})();var f=a("hctd");let h=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Hb({type:t,selectors:[["app-images"]],decls:2,vars:0,template:function(t,e){1&t&&(i.Tb(0,"p"),i.xc(1,"images works!"),i.Sb())},styles:[""]}),t})();var g=a("Iab2"),m=a("0IaG"),T=a("H+bZ");let S=(()=>{class t{constructor(t,e,a){this.api=t,this.dialogRef=e,this.dialogData=a}ngOnInit(){console.log(this.dialogData)}onFileChange(t){t.target.files.length>0&&(this.selectedFile=t.target.files[0],console.log(this.selectedFile))}uploadFile(){let t=new FormData;t.append("file",this.selectedFile),this.loadingUpload=!0,this.api.upload(t).subscribe(t=>{this.updateProduct(t),console.log(t)},t=>{this.loadingUpload=!1,alert("Gagal mengunggah file")})}updateProduct(t){1==t.status?(this.updateBook(t),alert("File berhasil diunggah"),this.loadingUpload=!1,this.dialogRef.close()):alert(t.message)}updateBook(t){this.api.put("book/"+this.dialogData.id,{url:t.url}).subscribe(t=>{console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(i.Nb(T.a),i.Nb(m.g),i.Nb(m.a))},t.\u0275cmp=i.Hb({type:t,selectors:[["app-file-uploader"]],decls:13,vars:1,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[1,"uk-flex","uk-flex-middle","uk-flex-center",2,"height","100px","outline","2px dashed #ccc","margin","10px",3,"click"],["type","file","id","file",2,"display","none",3,"change"],["fileInput",""],["mat-dialog-action","","align","right"],["mat-button","","mat-dialog-close","",2,"margin-right","5px"],["mat-flat-button","","color","primary",3,"click"]],template:function(t,e){if(1&t){const t=i.Ub();i.Tb(0,"h1",0),i.xc(1,"Unggah File"),i.Sb(),i.Tb(2,"div",1),i.Tb(3,"div",2),i.ac("click",function(){return i.qc(t),i.oc(7).click()}),i.Tb(4,"span"),i.xc(5),i.Sb(),i.Sb(),i.Tb(6,"input",3,4),i.ac("change",function(t){return e.onFileChange(t)}),i.Sb(),i.Sb(),i.Tb(8,"div",5),i.Tb(9,"button",6),i.xc(10,"Batal"),i.Sb(),i.Tb(11,"button",7),i.ac("click",function(){return e.uploadFile()}),i.xc(12,"Unggah dan Simpan"),i.Sb(),i.Sb()}2&t&&(i.Cb(5),i.yc(e.selectedFile?e.selectedFile.name:"Pilih File"))},directives:[m.h,m.e,c.a,m.d],styles:[""]}),t})();var x=a("kmnG"),k=a("qFsG"),v=a("3Pt+");let w=(()=>{class t{constructor(t,e,a){this.dialogRef=t,this.data=e,this.api=a,this.loading=!1}ngOnInit(){}saveData(){this.loading=!0,null==this.data.id?this.api.post("books",this.data).subscribe(t=>{this.dialogRef.close(t),this.loading=!1},t=>{this.loading=!1,alert("Tidak dapat menyimpan data")}):this.api.put("books/"+this.data.id,this.data).subscribe(t=>{this.dialogRef.close(t),this.loading=!1},t=>{this.loading=!1,alert("Tidak dapat memperbarui data")})}}return t.\u0275fac=function(e){return new(e||t)(i.Nb(m.g),i.Nb(m.a),i.Nb(T.a))},t.\u0275cmp=i.Hb({type:t,selectors:[["app-product-detail"]],decls:32,vars:8,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["appearance","outline",2,"width","100%"],["matInput","",3,"ngModel","ngModelChange"],["matInput","","type","number",3,"ngModel","ngModelChange"],["mat-dialog-actions","","align","end"],["mat-button","","mat-dialog-close",""],["mat-flat-button","",3,"disabled","click"]],template:function(t,e){1&t&&(i.Tb(0,"h3",0),i.xc(1," Detail Produk "),i.Sb(),i.Tb(2,"div",1),i.Tb(3,"mat-form-field",2),i.Tb(4,"mat-label"),i.xc(5,"Judul"),i.Sb(),i.Tb(6,"input",3),i.ac("ngModelChange",function(t){return e.data.title=t}),i.Sb(),i.Sb(),i.Tb(7,"mat-form-field",2),i.Tb(8,"mat-label"),i.xc(9,"Penulis"),i.Sb(),i.Tb(10,"input",3),i.ac("ngModelChange",function(t){return e.data.author=t}),i.Sb(),i.Sb(),i.Tb(11,"mat-form-field",2),i.Tb(12,"mat-label"),i.xc(13,"Penerbit"),i.Sb(),i.Tb(14,"input",3),i.ac("ngModelChange",function(t){return e.data.publisher=t}),i.Sb(),i.Sb(),i.Tb(15,"mat-form-field",2),i.Tb(16,"mat-label"),i.xc(17,"Tahun"),i.Sb(),i.Tb(18,"input",3),i.ac("ngModelChange",function(t){return e.data.year=t}),i.Sb(),i.Sb(),i.Tb(19,"mat-form-field",2),i.Tb(20,"mat-label"),i.xc(21,"ISBN"),i.Sb(),i.Tb(22,"input",3),i.ac("ngModelChange",function(t){return e.data.isbn=t}),i.Sb(),i.Sb(),i.Tb(23,"mat-form-field",2),i.Tb(24,"mat-label"),i.xc(25,"Harga"),i.Sb(),i.Tb(26,"input",4),i.ac("ngModelChange",function(t){return e.data.price=t}),i.Sb(),i.Sb(),i.Sb(),i.Tb(27,"div",5),i.Tb(28,"button",6),i.xc(29,"Batal"),i.Sb(),i.Tb(30,"button",7),i.ac("click",function(){return e.saveData()}),i.xc(31),i.Sb(),i.Sb()),2&t&&(i.Cb(6),i.jc("ngModel",e.data.title),i.Cb(4),i.jc("ngModel",e.data.author),i.Cb(4),i.jc("ngModel",e.data.publisher),i.Cb(4),i.jc("ngModel",e.data.year),i.Cb(4),i.jc("ngModel",e.data.isbn),i.Cb(4),i.jc("ngModel",e.data.price),i.Cb(4),i.jc("disabled",e.loading),i.Cb(1),i.yc(e.loading?"Menyimpan..":"Simpan"))},directives:[m.h,m.e,x.b,x.e,k.b,v.c,v.i,v.k,v.l,m.c,c.a,m.d],styles:[""]}),t})();var y=a("Xa2L"),C=a("Wp6s");function M(t,e){1&t&&(i.Tb(0,"div",2),i.Ob(1,"mat-spinner"),i.Sb())}function j(t,e){if(1&t){const t=i.Ub();i.Tb(0,"button",12),i.ac("click",function(){i.qc(t);const e=i.ec().$implicit;return i.ec(2).downloadFile(e)}),i.Tb(1,"mat-icon"),i.xc(2,"download"),i.Sb(),i.Sb()}}function I(t,e){if(1&t){const t=i.Ub();i.Tb(0,"tr"),i.Tb(1,"td"),i.wc(2,j,3,0,"button",9),i.Sb(),i.Tb(3,"td"),i.xc(4),i.Sb(),i.Tb(5,"td"),i.xc(6),i.Sb(),i.Tb(7,"td"),i.xc(8),i.Sb(),i.Tb(9,"td"),i.xc(10),i.Sb(),i.Tb(11,"td"),i.xc(12),i.Sb(),i.Tb(13,"td"),i.xc(14),i.Sb(),i.Tb(15,"td"),i.xc(16),i.Sb(),i.Tb(17,"td",7),i.Tb(18,"button",10),i.ac("click",function(){i.qc(t);const a=e.$implicit,n=e.index;return i.ec(2).upload(a,n)}),i.xc(19,"Upload Doc"),i.Sb(),i.Tb(20,"button",10),i.ac("click",function(){i.qc(t);const a=e.$implicit,n=e.index;return i.ec(2).productDetail(a,n)}),i.xc(21,"Edit"),i.Sb(),i.Tb(22,"button",11),i.ac("click",function(){i.qc(t);const a=e.$implicit,n=e.index;return i.ec(2).deleteProduct(a.id,n)}),i.xc(23),i.Sb(),i.Sb(),i.Sb()}if(2&t){const t=e.$implicit,a=e.index,n=i.ec(2);i.Cb(2),i.jc("ngIf",""!=t.url),i.Cb(2),i.yc(a+1),i.Cb(2),i.yc(t.title),i.Cb(2),i.yc(t.author),i.Cb(2),i.yc(t.publisher),i.Cb(2),i.yc(t.year),i.Cb(2),i.yc(t.isbn),i.Cb(2),i.yc(t.price),i.Cb(6),i.jc("disabled",n.loadingDelete[a]),i.Cb(1),i.yc(n.loadingDelete[a]?"Deleting..":"Delete")}}function D(t,e){if(1&t){const t=i.Ub();i.Tb(0,"mat-card"),i.Tb(1,"mat-card-header"),i.Tb(2,"mat-card-title"),i.xc(3),i.Sb(),i.Sb(),i.Tb(4,"mat-card-content"),i.Tb(5,"div",3),i.Ob(6,"span",4),i.Tb(7,"button",5),i.ac("click",function(){return i.qc(t),i.ec().productDetail({},-1)}),i.xc(8,"Tambah Produk"),i.Sb(),i.Sb(),i.Tb(9,"table",6),i.Tb(10,"thead"),i.Ob(11,"th"),i.Tb(12,"th"),i.xc(13,"No"),i.Sb(),i.Tb(14,"th"),i.xc(15,"Judul"),i.Sb(),i.Tb(16,"th"),i.xc(17,"Penulis"),i.Sb(),i.Tb(18,"th"),i.xc(19,"Penerbit"),i.Sb(),i.Tb(20,"th"),i.xc(21,"Tahun Terbit"),i.Sb(),i.Tb(22,"th"),i.xc(23,"ISBN"),i.Sb(),i.Tb(24,"th"),i.xc(25,"Harga"),i.Sb(),i.Tb(26,"th",7),i.xc(27,"#"),i.Sb(),i.Sb(),i.Tb(28,"tbody"),i.wc(29,I,24,10,"tr",8),i.Sb(),i.Sb(),i.Sb(),i.Sb()}if(2&t){const t=i.ec();i.Cb(3),i.yc(t.title),i.Cb(26),i.jc("ngForOf",t.books)}}const F=[{path:"",component:u,children:[{path:"dashboard",component:p},{path:"images",component:h},{path:"product",component:(()=>{class t{constructor(t,e){this.dialog=t,this.api=e,this.book={},this.books=[],this.loading=!1,this.loadingDelete={}}ngOnInit(){this.title="Products",this.book={title:"Angular saya",author:"Saya",publisher:"Sunhouse Digital",year:2020,isbn:"8298377474",price:7e4},this.getBooks()}getBooks(){this.loading=!0,this.api.get("bookswithauth").subscribe(t=>{this.books=t,this.loading=!1},t=>{this.loading=!1})}productDetail(t,e){this.dialog.open(w,{width:"400px",data:t}).afterClosed().subscribe(a=>{a&&(-1==e?this.books.push(a):this.books[e]=t)})}deleteProduct(t,e){confirm("Delete item?")&&(this.loadingDelete[e]=!0,this.api.delete("books/"+this.books[e].id).subscribe(t=>{this.books.splice(e,1),this.loadingDelete[e]=!1},t=>{alert("Tidak dapat menghapus data"),this.loadingDelete[e]=!1}))}upload(t,e){this.dialog.open(S,{width:"400px",data:t}).afterClosed().subscribe(t=>{})}downloadFile(t){g.saveAs("http://api.sunhouse.co.id/bookstore/"+t.url)}}return t.\u0275fac=function(e){return new(e||t)(i.Nb(m.b),i.Nb(T.a))},t.\u0275cmp=i.Hb({type:t,selectors:[["app-product"]],decls:2,vars:2,consts:[["style","height: 300px;","class","uk-flex uk-flex-center uk-flex-middle",4,"ngIf"],[4,"ngIf"],[1,"uk-flex","uk-flex-center","uk-flex-middle",2,"height","300px"],[1,"uk-flex"],[1,"uk-width-expand"],["mat-flat-button","","color","primary",3,"click"],[1,"uk-table","uk-table-middle","uk-table-divider"],["align","right"],[4,"ngFor","ngForOf"],["mat-icon-button","",3,"click",4,"ngIf"],["mat-button","","color","primary",3,"click"],["mat-button","","color","warn",3,"disabled","click"],["mat-icon-button","",3,"click"]],template:function(t,e){1&t&&(i.wc(0,M,2,0,"div",0),i.wc(1,D,30,2,"mat-card",1)),2&t&&(i.jc("ngIf",e.loading),i.Cb(1),i.jc("ngIf",!e.loading))},directives:[n.k,y.b,C.a,C.c,C.e,C.b,c.a,n.j,l.a],styles:[""]}),t})()},{path:"",pathMatch:"full",redirectTo:"/admin/dashboard"}]}];let L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Lb({type:t}),t.\u0275inj=i.Kb({imports:[[n.c,r.c.forChild(F),f.a,v.e]]}),t})()}}]);