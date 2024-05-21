

$(".Contenedor-li").mouseover(function(){

    let i = $(".Contenedor-li").index($(this))
    $(".Contenedor-li").addClass(`isInactive`)
    $(".Contenedor-li").eq(i).removeClass(`isInactive`)
    $(".Images").eq(i).addClass(`isActive`)

})

$(".Contenedor-li").mouseout(function(){

    let i = $(".Contenedor-li").index($(this))
    $(".Contenedor-li").removeClass(`isInactive`)
    $(".Images").eq(i).removeClass(`isActive`)

})

