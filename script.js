
$(".hamburger").click(function(e) {
    //como estamos falando de um botão, é importante desativar os eventos padrões
    e.preventDefault();
    //o toggle usa o hide e show para inverter o estado atual
    $(".menu").toggle();
    //se o menu está visível, o próprio botão do menu se transforma em fechar, dispensando o elemento adicional "btn-close
    changeMenuIcon();
})

$('.nav-links').on('click', function(e) {
    $('.menu').hide();
    changeMenuIcon();
  })
  
  //funcção para alterar o ícone do menu entre aberto e fechado
  function changeMenuIcon() {
  if($(".menu").is(":visible")) {
    $(".hamburger").html('<i class="fa fa-close " ></i>'); 
    }
    else {
     $(".hamburger").html('<i class="fa fa-bars fa-2x" aria-hidden="true"></i>');
    }
}
