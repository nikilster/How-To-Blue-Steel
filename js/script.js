/*
	Made By Nikil
*/

//Global State
//Do this a better way
var STATE;

/*
	Constants
*/

//Selectors for the div steps
var STEP_1_ID = "#step1";
var STEP_2_ID = "#step2";
var STEP_3_ID = "#step3";

//States for which step we are in
var STATE_STEP_1 = 1;
var STATE_STEP_2 = 2;
var STATE_STEP_3 = 3;

//Classes for the step transition links
var NEXT_LINK_CLASS = ".nextStep";
var PREVIOUS_LINK_CLASS = ".previousStep";

/*
	Document Ready
*/
$(document).ready(function(){

	//Init to the start state
	STATE = STATE_STEP_1;

	//Set clicks
	$(NEXT_LINK_CLASS).click(function(event){
		console.log("Next clicked!");
		//Prevent the default link behavior
		event.preventDefault();

		//go to the next state with this click of the link
		goToNextState();
	})

	//Set Previous
	$(PREVIOUS_LINK_CLASS).click(function(event){

		//Prevent the default link behavior
		event.preventDefault();

		//Go to prevous link (to help)
		goToPreviousState();
	})
 });


/*
	Transition to next state
*/
function goToNextState()
{
	//1->2
	if(STATE == STATE_STEP_1)
		transitionToState(STATE_STEP_1, STATE_STEP_2);
	//2->3
	else if(STATE == STATE_STEP_2)
		transitionToState(STATE_STEP_2, STATE_STEP_3);

	//Don't need to transition otherwise (should never be called otherwiseme)
}


/*
	Transition to previous state
*/
function goToPreviousState()
{
	//2->1
	if(STATE == STATE_STEP_2)
		transitionToState(STATE_STEP_2, STATE_STEP_1);
	//3->2
	if(STATE == STATE_STEP_3)
		transitionToState(STATE_STEP_3, STATE_STEP_2);

	//Don't need to transition otherwise
}

/*
	Transition from the "FROM" state to the "TO" state
*/
function transitionToState(fromState, toState)
{
	console.log("transitioning from " + fromState + toState);
	//Sanity check
	if(STATE != fromState)
		console.log("Error with the states!!");

	//Fade out / hide the current state
	$(idForState(fromState)).fadeOut("fast", function(){
	
		//Hide
		$(idForState(fromState)).hide();

		//Show the new state
		$(idForState(toState)).fadeIn("fast");
	});

	

	//Set tje new state
	STATE = toState;
}

/*
	Returns the div id for the given state
*/
function idForState(state)
{
	if(state == STATE_STEP_1) return STEP_1_ID;
	else if(state == STATE_STEP_2) return STEP_2_ID;
	else if(state == STATE_STEP_3) return STEP_3_ID;
	else alert("uh oh something broke!!!");
}