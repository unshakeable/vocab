$('document').ready(function(){
	VocabModule.displayWord(0);
	$('.toggleMeaning').on('click', function () {
		$('#meaning').toggle();
	});
	$('.togglePicture').on('click', function () {
		$('#picture').toggle();
	});
	$('#next').on('click',function () { 
		VocabModule.nextWord();
	});
	$('#previous').on('click',function () { 
		VocabModule.previousWord();
	});
	$('#speaker').on('click', function(){
		var audio = document.getElementById("audio");
		audio.play();
	});
});

var VocabModule = (function navigation () {
	var idx = 0;
	var myVocab = [];

	var displayWord = function(idx){
		$('#word').html(_capitaliseFirstLetter(myVocab[idx].word));
		$('#meaning').html(myVocab[idx].meaning).hide();
		$('#picture').html('<img src=images/'+ myVocab[idx].word +'.png>').hide();
		$('#audio').attr('src','http://www.gstatic.com/dictionary/static/sounds/de/0/'+myVocab[idx].word+'.mp3');
		$('#level').html(myVocab[idx].level);	
	}

	var _capitaliseFirstLetter = function (string)
	{
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	var nextWord = function(){
		(idx === myVocab.length - 1)? idx = 0 : idx++;
		displayWord(idx);
	}

	var previousWord = function(){
		( idx === 0 ) ? ( idx = myVocab.length - 1 ) : idx--;
		displayWord(idx);
	}
	var addWord = function(level, word, meaning){
		myVocab.push({
			'word':word,
			'meaning':meaning,
			'level':level
		});
	}

	return {
		nextWord: nextWord,
		previousWord: previousWord,
		addWord : addWord,
		displayWord : displayWord
	}
})();    


