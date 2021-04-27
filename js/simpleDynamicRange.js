$('input').change(calculateDynamicRange);


function calculateDynamicRange(){
    
    var wellDepth = $('#wellDepth').prop('value');
    var readNoise = $('#readNoise').prop('value');

    var dynamicRange = Math.round(wellDepth / readNoise) + ' : 1';
    var dynamicRangeDb = Math.round( 10 * Math.log10(wellDepth / readNoise) ) + ' dB';
    
    $('#dynamicRange').text(dynamicRange);
    $('#dynamicRangeDb').text(dynamicRangeDb);
    
}

