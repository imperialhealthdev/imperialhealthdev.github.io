$(document).ready(function(){

   setTimeout(function() {
  $("#popup").fadeOut().empty();
}, 4000);
    
     var table = $('#table').DataTable({
          "ordering": false,
          "fixedHeader": true,
          "responsive": true,
         "autoWidth": false,
          "ajax"     :     "providers.json",
          "drawCallback" : function(){
          $('.paginate_button', this.api().table().container())          
             .on('click', function(){
              document.body.scrollTop = 0; // For Safari
              document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
             });       
          },
         "initComplete" : function() {
      this.api().columns([1, 2]).every(function() {
        var column = this;
        var th = $("#filters").find("th").eq(column.index());
        var select = $('<select><option value="">' + th.text() + '</option></select>')
          .on('change', function() {
            var val = $.fn.dataTable.util.escapeRegex(
              $(this).val());

            column.search(val ? '^' + val + '$' : '', true, false)
              .draw();
          });
        $(th).replaceWith($("<th>", {html: select}));

        console.log(select);

        column.data().unique().sort().each(function(d, j) {
          $(select).append('<option value="' + d + '">' + d + '</option>')
        });
      });
    },
           "columns"     :     [  
                {     "data"     :     "Name", },  
                {     "data"     :     "Provider Type"},
                {     "data"     :     "Specialty"},
                {     "data"     :     "Address" },
                {     "data"     :     "City"},
                {     "data"     :     "State"},
                {     "data"     :     "Zip"},
                {     "data"     :     "Phone"}
           ]
      });
    $(document).on('click','#table tr',function(e){
    var row_object  = table.row(this).data();
    var address         = table.row(this).data()['Address'];
    var city        = table.row(this).data()['City'];
    var state       = table.row(this).data()['State'];
    var zip        = table.row(this).data()['Zip'];
    var mapsearch = address.concat('+') + city.concat('+') + state.concat('+') + zip;
        window.open("http://maps.google.com/?q="+mapsearch)
    });
    
    
});