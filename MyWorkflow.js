/*
Lucid Generated Code
*/
function lucidDebug(uid,event) {
	try{
event.allAttributes_Lucid = "";
 for(var propertyName in event) {event.allAttributes_Lucid += propertyName+",";}		window.LucidWebPreviewDelegate.javascriptFunctionEntered_withEvent_(uid,event);
	} catch(err) { }
}


function lucidLog(uid,value) {
	try{
		console.log(value);
		window.LucidWebPreviewDelegate.lucidLog_withValue_(uid,value);
	} catch(err) { }
}




$(document).ready(function() {


//Lucid_LucidBinding_0_23_8910286471114999598855939864
/*lucidcode*/
$(/*luc!d_element*/document/*luc!d_element_end*/).bind(/*luc!d_event*/'ready'/*luc!d_event_end*/, function(event) {    
/*luc!d_debug*/	lucidDebug('8910286471114999598855939864',event);/*luc!d_debug_end*/
	/*luc!d_function*/even(this,event)/*luc!d_function_end*/;    });
/*lucidcode_end*/
//EndLucid

//Lucid_LucidBinding_100_23_11642351551576742268359094296
/*lucidcode*/
$(/*luc!d_element*/'.mytable tr'/*luc!d_element_end*/).bind(/*luc!d_event*/'mouseover'/*luc!d_event_end*/, function(event) {    
/*luc!d_debug*/	lucidDebug('11642351551576742268359094296',event);/*luc!d_debug_end*/
	/*luc!d_function*/blurTable(this,event)/*luc!d_function_end*/;    });
/*lucidcode_end*/
//EndLucid

//Lucid_LucidBinding_200_23_5011328061082069081862337394
/*lucidcode*/
$(/*luc!d_element*/'.mytable tr'/*luc!d_element_end*/).bind(/*luc!d_event*/'mouseout'/*luc!d_event_end*/, function(event) {    
/*luc!d_debug*/	lucidDebug('5011328061082069081862337394',event);/*luc!d_debug_end*/
	/*luc!d_function*/removeBlur(this,event)/*luc!d_function_end*/;    });
/*lucidcode_end*/
//EndLucid

//Lucid_LucidBinding_300_23_9536389751139795264984870808
/*lucidcode*/
$(/*luc!d_element*/'DIV.#button'/*luc!d_element_end*/).bind(/*luc!d_event*/'click'/*luc!d_event_end*/, function(event) {    
/*luc!d_debug*/	lucidDebug('9536389751139795264984870808',event);/*luc!d_debug_end*/
	/*luc!d_function*/ifBlock_1(this,event)/*luc!d_function_end*/;    });
/*lucidcode_end*/
//EndLucid


});

//Lucid_LucidCustomAction_0_163_18482865498010751881095701673
function even(senderObject, event) {
	lucidDebug('18482865498010751881095701673',event);
/*lucidcode*/$('.mytable tr:even').addClass('even-row');/*lucidcode_end*/

/*luc!d_callback*/odd(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidCustomAction_0_259_102252617914333471591941632914
function odd(senderObject, event) {
	lucidDebug('102252617914333471591941632914',event);
/*lucidcode*/$('.mytable tr:odd').addClass('odd-row');/*lucidcode_end*/

/*luc!d_callback*/hideTableRows(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidCustomAction_102_165_11818185647483540451922197483
function blurTable(senderObject, event) {
	lucidDebug('11818185647483540451922197483',event);
/*lucidcode*/$('.mytable td').addClass('blur');/*lucidcode_end*/

/*luc!d_callback*/Over(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidCustomAction_102_259_17692388141538170536624055966
function Over(senderObject, event) {
	lucidDebug('17692388141538170536624055966',event);
/*lucidcode*/$(senderObject).addClass('over');/*lucidcode_end*/

}
//EndLucid

//Lucid_LucidCustomAction_204_260_17382925051114597747544481048
function removeOver(senderObject, event) {
	lucidDebug('17382925051114597747544481048',event);
/*lucidcode*/$(senderObject).removeClass('over');/*lucidcode_end*/

}
//EndLucid

//Lucid_LucidCustomAction_204_165_16500536784381489214885056
function removeBlur(senderObject, event) {
	lucidDebug('16500536784381489214885056',event);
/*lucidcode*/$('.mytable td').removeClass('blur');/*lucidcode_end*/

/*luc!d_callback*/removeOver(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidCustomAction_3_357_195733314517436632691186715121
function hideTableRows(senderObject, event) {
	lucidDebug('195733314517436632691186715121',event);
/*lucidcode*/ $('.mytable tr td').hide();/*lucidcode_end*/

/*luc!d_callback*/initTableStateHidden(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidCustomAction_322_452_12389129854090975831607923434
function changeTextToHide(senderObject, event) {
	lucidDebug('12389129854090975831607923434',event);
/*lucidcode*/$(senderObject).text('Hide');/*lucidcode_end*/

}
//EndLucid

//Lucid_LucidCustomAction_465_453_28350236117054522811072250258
function changeTextToShow(senderObject, event) {
	lucidDebug('28350236117054522811072250258',event);
/*lucidcode*/$(senderObject).text('Show');/*lucidcode_end*/

}
//EndLucid

//Lucid_LucidCustomAction_322_261_16635211597105190201684091820
function showTable(senderObject, event) {
	lucidDebug('16635211597105190201684091820',event);
/*lucidcode*/ $('.mytable tr td').show();/*lucidcode_end*/

/*luc!d_callback*/setTableStateShown(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidIfBlockAction_422_177_18346648191641409307591293387
function ifBlock_1(senderObject, event) {
	lucidDebug('18346648191641409307591293387',event);
/*lucidcode*/
if (/*luc!d_eval_0*/tableState == 'hidden'/*luc!d_eval_0_end*/) {/*luc!d_exec_0*/showTable(senderObject,event); return;/*luc!d_exec_0_end*/}
if (/*luc!d_eval_1*/tableState == 'shown'/*luc!d_eval_1_end*/) {/*luc!d_exec_1*/hideTabe(senderObject,event); return;/*luc!d_exec_1_end*/}
/*lucidcode*/

}
//EndLucid

//Lucid_LucidCustomAction_465_261_9671856421185360951155710238
function hideTabe(senderObject, event) {
	lucidDebug('9671856421185360951155710238',event);
/*lucidcode*/ $('.mytable tr td').hide();/*lucidcode_end*/

/*luc!d_callback*/setTableStateHidden(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidCustomAction_465_357_15590161769368929851010299091
function setTableStateHidden(senderObject, event) {
	lucidDebug('15590161769368929851010299091',event);
/*lucidcode*/tableState='hidden';/*lucidcode_end*/

/*luc!d_callback*/changeTextToShow(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidCustomAction_0_455_17292540451676539464465839161
function initTableStateHidden(senderObject, event) {
	lucidDebug('17292540451676539464465839161',event);
/*lucidcode*/tableState='hidden';/*lucidcode_end*/

}
//EndLucid

//Lucid_LucidCustomAction_322_356_13009943171329920651814643575
function setTableStateShown(senderObject, event) {
	lucidDebug('13009943171329920651814643575',event);
/*lucidcode*/tableState='shown';/*lucidcode_end*/

/*luc!d_callback*/changeTextToHide(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

