function jpbLoadPage(objTarget,pageName){
  if( !pageName ){ pageName="homePage"; }
  if( !(typeof(objTarget)=='object') ){ objTarget = '#'+objTarget; }
  
  $(objTarget).addJxLoader();
  $(objTarget).load( "templates/"+pageName+".tpl",
                          function(response, status, xhr){
                            if (status == "error") {
                              var msg = "Sorry but there was an error: ";
                              $(this).html(msg + xhr.status + " " + xhr.statusText);
                            }
                          });
  $(objTarget).removeJxLoader();
}

(function( $ ){

  $.fn.addJxLoader = function(options){
  
    var settings = {
      'text' : 'Loading...',
      'image' : 'images/ui-image-jxloader.gif'
    };
    
    return this.each(function() {
      var objTarget = this;
            
      // If options exist, lets merge them
      // with our default settings
      if ( options ) { $.extend( settings, options ); }
      
      $(objTarget).css('position','relative');
      $(objTarget).attr('oldPosition',$(objTarget).attr('position'));
      
      var jxLoaderPosX = ($(objTarget).width()/2)-50;
      var jxLoaderPosY = ($(objTarget).height()/2)+25;
      var jxLoaderContainer = $('<div>').addClass('ajaxLoaderContainer ui-corner-all')
                                        .css({'left':jxLoaderPosX+'px',
                                              'top':jxLoaderPosY+'px'
                                              })
                                        .appendTo(objTarget);
      $('<span>').addClass('ui-image-jxloader')
                  .css('background-image', 'url('+settings.image+')')
                  .appendTo(jxLoaderContainer);
      $('<span>').addClass('ajaxLoaderText').text(settings.text).appendTo(jxLoaderContainer);
      $('<div>').css('clear','both').appendTo(jxLoaderContainer);
    });
    
  }; //--> addJxLoader
  
  
  $.fn.removeJxLoader = function(){
    return this.each(function() {
      var objTarget = this;
      
      /* Resetting the position to its original */
      $(objTarget).css('position',$(objTarget).attr('oldPosition'));
      
      $(objTarget).children('.ajaxLoaderContainer').fadeOut('slow',function(){ $(this).remove(); });
    });
  }; //--> removeJxLoader


  $.fn.isValidEntry = function( entryStr ){ return !(entryStr=='' | entryStr=='empty' | entryStr=="undefined"); }

  $.fn.makeItLink = function( options ){
  
    var settings = {
      'text' : 'text',
      'url' : '#',
      'linkClass' : 'jpbLink'
    };
  
    return this.each(function() {
      var objTarget = this;
            
      // If options exist, lets merge them
      // with our default settings
      if ( options ) { $.extend( settings, options ); }
      
      $("<a>").attr('href',settings.url)
              .text(settings.text)
              .addClass(settings.linkClass)
              .appendTo(objTarget);
    });
  
  }

  $.fn.jpbShowMesg = function( options ){
  
    var settings = {
      'msgType':'Alert',
      'msgText' : 'text',
      'msgFadeOut': 1
    };
  
    return this.each(function() {
      var objTarget = this;
            
      // If options exist, lets merge them
      // with our default settings
      if ( options ) { $.extend( settings, options ); }      

      divElemt = $("<div>").addClass("ui-state-error ui-corner-all jpbAlertBox").css("font-size","0.8em").appendTo(objTarget);
      pElemt = $("<p>").appendTo(divElemt);
      $("<span>").addClass("ui-icon ui-icon-alert").css({'float': 'left','margin-right': '0.3em'}).appendTo(pElemt);
      $(pElemt).append("<strong>"+settings.msgType+":</strong>"+settings.msgText);
      if(settings.msgFadeOut){ $(divElemt).delay(3000).fadeOut('slow', function(){ $(this).remove();}); }
      
    });
  
  }

})( jQuery );