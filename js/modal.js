

$(document).ready(function(){
    var url = 'http://openapi.seoul.go.kr:8088/77445a7a5673736532377070516153/json/vNtcnNgc002/1/100/';
    var Detail='';
    $('#modal_btn').click(function(){
        Detail = $(this).val();
        console.log(Detail);
             
        $.ajax({
            url: url,
            type:"GET",
            dataType:'json',
            success:function(response) {
                showList(response);
            }
        });
    });

    function showList(data){
        var CNList = '';
        $(".modal-body").empty();
        var head = '<span>'+Detail+'</span>';
        $(".modal-body").append(head);
        $.each(data, function(index,item){
            timeList = '<tr>';
			timeList += '<td>' + item.CN + '</td>';
			timeList += '</tr>';
            $(".modal-body").append(CNList); // tmp = CNList
        })
    }
});