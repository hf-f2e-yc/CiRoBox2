// var CBoxbackdrop    = '<div class="cirobox-backdrop is-hide" />',
// 	CBoxloading     = '<div class="cirobox-loading cirobox-middleSet"><div class="cirobox-loading-bd"><span class="cirobox-loading-bd-img"><img /></span><em class="cirobox-loading-bd-text">- loading -</em></div></div>',
// 	CBoxiframe      = '<iframe width="100%" height="100%" marginwidth="0" marginheight="0" frameborder="0" allowtransparency="true" scrolling="no" style="background : transparent;" class="cirobox-iframe"></iframe>';
// 	CiRoBox         = jQuery('.cirobox' , jQuery(window.parent.document)),
// 	CiRoBoxbackdrop = '',
// 	CiRoBoxloading  = '',
// 	CiRoBoxiframe   = '',
// 	CiRoObject      = '';
// var CiRoBoxContent , CiRoBoxCloseAfter , CiRoBoxWidth , CiRoBoxHeight;
// // var CiRoBoxClose;

// jQuery.fn.CiRoBox = function(options) {
// 		CiRoBoxinit = {
// 			backdrop      : true,
// 			click         : true,
// 			backdropclose : false,
// 			keyboardclose : true,
// 			closehide     : false,
// 			loading       : 'http://s1-t.hfcdn.com/fp/hf/libs/cirobox/img/loading.gif',
// 			content       : '',
// 			width         : '800',
// 			height        : 'auto',
// 			url           : '',
// 			callcirobox   : function(element){
// 				CiRoBoxContent    = CiRoBoxExtend.content;
// 				CiRoBoxCloseAfter = CiRoBoxExtend.closeafter;
// 				CiRoBoxWidth      = CiRoBoxExtend.width;
// 				CiRoBoxHeight     = CiRoBoxExtend.height;

// 				if ( CiRoBoxExtend.backdrop ) {
// 					jQuery('body').append(CBoxbackdrop);
// 					CiRoBoxbackdrop = jQuery('.cirobox-backdrop' , jQuery(window.parent.document));

// 					if ( CiRoBoxExtend.backdropclose ) {
// 						CiRoBoxbackdrop.addClass('cirobox-backdrop-close').on('click' , function(){
// 							jQuery.fn.CiRoBoxClose();
// 						});
// 					}
// 				} else {
// 					CiRoBoxExtend.backdropclose = false;
// 				}

// 				if ( CiRoBoxExtend.closehide ) {
// 					jQuery('.cirobox-icon-close' , CiRoBox).addClass('is-hide');
// 					CiRoBoxExtend.keyboardclose = false;
// 				}

// 				if ( CiRoBoxExtend.keyboardclose ) {
// 					jQuery(window.parent.document).bind('keydown' , function(e) {
// 						if ( e.keyCode === 27 ) {
// 							jQuery.fn.CiRoBoxClose();
// 						}
// 					});
// 				} else {
// 					jQuery(window.parent.document).unbind('keydown');
// 				}

// 				CiRoBoxbackdrop.removeClass('is-hide');
// 				jQuery.fn.CiRoBoxResize(CiRoBoxWidth , 150);
// 				CiRoBox.removeClass('is-hide');
// 				CiRoBoxExtend.ciroappend(element);

// 				jQuery('.cirobox-bd' , CiRoBox).append(CBoxloading);
// 				CiRoBoxloading = jQuery('.cirobox-loading' , CiRoBox);
// 				jQuery('.cirobox-loading-bd-img img' , CiRoBoxloading).attr('src' , CiRoBoxExtend.loading);

// 				if ( document.documentMode < 9 || navigator.userAgent.indexOf('MSIE 9.0') > 0 ) {
// 					CiRoBox.removeClass('is-hide').queue(function(){
// 						if ( !! CiRoBoxExtend.openafter ) {
// 							CiRoBoxExtend.openafter();
// 							// CiRoBox.finish().delay(50).queue(function(){
								
// 							// });
// 						}
// 					});
// 				} else {
// 					CiRoBox.removeClass('is-hide').one('animationend transitionend' , function(){
// 						if ( !! CiRoBoxExtend.openafter ) {
// 							CiRoBoxExtend.openafter();
// 							// CiRoBox.finish().delay(50).queue(function(){
								
// 							// });
// 						}
// 					});
// 				}
// 			},
// 			ciroappend : function(element) {
// 				if ( typeof (CiRoBoxExtend.content) === 'string' ) {
// 					if ( CiRoBoxExtend.content.length === 0 ) {
// 						jQuery('.cirobox-bd' , CiRoBox).append(CBoxiframe);
// 						CiRoBoxiframe = jQuery('.cirobox-iframe' , jQuery(window.parent.document));
// 						CiRoBoxiframe.addClass('is-disable');

// 						if ( CiRoBoxExtend.height === 'auto' || CiRoBoxExtend.height === '' ) {
// 							CiRoBoxExtend.height = 450;
// 						}

// 						jQuery.fn.CiRoBoxResize(CiRoBoxWidth , CiRoBoxExtend.height);
						
// 						if ( CiRoBoxExtend.url === '' ) {

// 							CiRoBoxiframe.attr('src' , jQuery(element).attr('href'));
// 						} else {
// 							CiRoBoxiframe.attr('src' , CiRoBoxExtend.url);
// 						}

// 						CiRoBoxiframe.on('load' , function(){
// 							CiRoBoxiframe.removeClass('is-disable');
// 							CiRoBoxloading.remove();
// 						});
// 					} else {
// 						CiRoObject = jQuery(''+CiRoBoxExtend.content+'');
// 						jQuery('.cirobox-bd' , CiRoBox).append(CiRoObject);
// 						CiRoObject.addClass('is-disable');
// 						CiRoBoxExtend.ciroanimate();
// 					}
// 				} else if ( typeof (CiRoBoxExtend.content) === 'object' ) {
// 					CiRoObject = CiRoBoxExtend.content;
// 					jQuery('.cirobox-bd' , CiRoBox).append(CiRoObject);
// 					CiRoObject.addClass('is-disable');
// 					CiRoBoxExtend.ciroanimate();
// 				}

				
// 			},
// 			ciroanimate : function() {
// 				CiRoBox.one('animationend transitionend' , function(){
// 					CiRoObject.removeClass('is-disable');
// 					CiRoBoxloading.remove();

// 					if ( CiRoBoxExtend.height === 'auto' || CiRoBoxExtend.height === '' ) {
// 						jQuery.fn.CiRoBoxResize(CiRoBoxWidth , CiRoObject.height());
// 					} else {
// 						jQuery.fn.CiRoBoxResize(CiRoBoxWidth , CiRoBoxHeight);
// 					}
// 				});
// 			}
// 		}

// 	var CiRoBoxExtend = jQuery.extend(CiRoBoxinit , options);

// 	return this.each(function(index , value) {
// 		if ( CiRoBoxExtend.click ) {
// 			jQuery(this).on('click' , function(e){
// 				e.preventDefault();
// 				if ( !! CiRoBoxExtend.openbefore ) {
// 					CiRoBoxExtend.openbefore();
// 					CiRoBoxExtend.callcirobox(this);
// 				} else {
// 					CiRoBoxExtend.callcirobox(this);
// 				}
// 			});
// 		} else {
// 			if ( !! CiRoBoxExtend.openbefore ) {
// 				CiRoBoxExtend.openbefore();
// 				CiRoBoxExtend.callcirobox(arguments[1]);
// 			} else {
// 				CiRoBoxExtend.callcirobox(arguments[1]);
// 			}
// 		}
// 	});
// }

// jQuery.fn.CiRoBoxResize = function(width , height) {
// 	if ( jQuery(window.parent).height() > parseInt(height , 10) ) {
// 		CiRoBox.add(CiRoBoxbackdrop).bind('mousewheel DOMMouseScroll' , function(event){
// 			event.preventDefault();
// 		});
// 		CiRoBox.css({
// 			'top'         : 50 + '%',
// 			'margin-top'  : (((parseInt(height , 10) + 4) / 2) * (-1)) + 'px',
// 			'margin-left' : (((parseInt(width , 10) + 4) / 2) * (-1)) + 'px',
// 			'width'       : parseInt(width , 10) + 'px',
// 			'height'      : parseInt(height , 10) + 'px',
// 			'position'    : 'fixed'
// 		});
// 	} else if ( jQuery(window.parent).height() <= parseInt(height , 10) ) {
// 		CiRoBox.add(CiRoBoxbackdrop).unbind();
// 		CiRoBox.css({
// 			'top'         : (jQuery(window.parent).scrollTop() + 10) + 'px',
// 			'margin-top'  : 0 + 'px',
// 			'margin-left' : ((width / 2) * (-1)) + 'px',
// 			'width'       : width + 'px',
// 			'height'      : height + 'px',
// 			'position'    : 'absolute'
// 		});
// 	}

// 	if ( parseInt(height , 10) < 50 ) {
// 		jQuery('.cirobox-icon-close' , CiRoBox).addClass('is-default')
// 	} else {
// 		jQuery('.cirobox-icon-close' , CiRoBox).removeClass('is-default');
// 	}
// }

// jQuery.fn.CiRoBoxClose = function() {
// 	if ( document.documentMode < 9 || navigator.userAgent.indexOf('MSIE 9.0') > 0 ) {
// 		CiRoBoxbackdrop.addClass('is-hide');
// 		CiRoBox.addClass('is-hide').queue(function(){
// 			jQuery('.cirobox-icon-close' , CiRoBox).removeClass('is-default');
// 			CiRoBox.removeAttr('style');
// 			CiRoBoxbackdrop.remove();
// 			CiRoBox.add(CiRoBoxbackdrop).unbind();
// 			if ( typeof (CiRoBoxContent) === 'string' ) {
// 				if ( CiRoBoxContent.length === 0 ) {
// 					jQuery('.cirobox-bd' , CiRoBox).empty();
// 				} else {
// 					jQuery('body').append(jQuery(CiRoBoxContent));
// 				}
// 			} else if ( typeof (CiRoBoxContent) === 'object' ) {
// 				jQuery('body').append(CiRoBoxContent);
// 			}

// 			if ( !! CiRoBoxCloseAfter ) {
// 				CiRoBox.finish().delay(50).queue(function(){
// 					CiRoBoxCloseAfter();
// 					CiRoBoxbackdrop.remove();
// 				});
// 			}
// 		});
// 	} else {
// 		CiRoBoxbackdrop.addClass('is-hide');
// 		CiRoBox.addClass('is-hide').one('animationend transitionend' , function(){
// 			CiRoBox.finish().delay(50).queue(function(){
// 				jQuery('.cirobox-icon-close' , CiRoBox).removeClass('is-default');
// 				CiRoBox.removeAttr('style');
// 				CiRoBoxbackdrop.remove();
// 			});
			
// 			CiRoBox.add(CiRoBoxbackdrop).unbind();

// 			if ( typeof (CiRoBoxContent) === 'string' ) {
// 				if ( CiRoBoxContent.length === 0 ) {
// 					jQuery('.cirobox-bd' , CiRoBox).empty();
// 				} else {
// 					jQuery('body').append(jQuery(CiRoBoxContent));
// 				}
// 			} else if ( typeof (CiRoBoxContent) === 'object' ) {
// 				jQuery('body').append(CiRoBoxContent);
// 			}

// 			if ( !! CiRoBoxCloseAfter ) {
// 				CiRoBox.finish().delay(50).queue(function(){
// 					CiRoBoxCloseAfter();
// 					CiRoBoxbackdrop.remove();
// 				});
// 			}
// 		});
// 	}
// }

// jQuery(window.parent).bind('resize' , function(){
// 	jQuery.fn.CiRoBoxResize(CiRoBoxWidth , CiRoBox.height());
// });

// jQuery('.cirobox-icon-close' , CiRoBox).on('click' , function(){
// 	jQuery.fn.CiRoBoxClose();
// });