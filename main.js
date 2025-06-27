let isShowed = false;
$('.edit-btn').click(() => {
    if (!isShowed){
        $('.code-editor').css('display', 'block');
        $('input[name="table-list-radio"]').prop('checked', false);
        isShowed = true;
    }else{
        $('.code-editor').css('display', 'none');
        isShowed = false;
    }
});

$('.save-btn').on('click', () => {
    const html = $('#html-code').val();
    const css = $('#css-code').val();
    const output = `<style>${css}</style>${html}`;
    $('#code-result')[0].contentDocument.body.innerHTML = output;
    
});

$('.clear-btn').on('click', () => {
    $('#html-code').val('');
    $('#css-code').val('');
});

$('.add-btn').on('click', () => {
    $('#create-popup').toggleClass('shown');
});

$('input[name="table-list-radio"]').on('change', () => {
    if ($('input[name="table-list-radio"]:checked').val() === 'table'){
        $('.wrapper-table').show();
        $('.wrapper-list').hide();
    }else{
        $('.wrapper-table').hide();
        $('.wrapper-list').show();
    }
});

$('i').on('click', () => {
    $('.pop-up').removeClass('shown');
})



$('#create-table').on('click', () => {
    const rows = parseInt($('#rows-amount').val());
    const cols = parseInt($('#cols-amount').val());
    const tcWidth = parseInt($('#table-cell-width').val());
    const tcHeight = parseInt($('#table-cell-height').val());
    const borderWidth = parseInt($('#table-border-width').val());
    const borderType = $('#table-border-type').val();
    const borderColor = $('#table-border-color').val();

    const values = [rows, cols, tcWidth, tcHeight, borderWidth];
    const isEmpty = values.some(item => isNaN(item));

    if (isEmpty){
        alert('Заповніть всі поля!');
        return
    }
    let output = `\n<table>\n`;
    for (let i = 0; i < rows; i++){
        let row = '    <tr>\n';
        for (let j = 0; j < cols; j++){
            row += '        <td></td>\n';
        }
        row += '    </tr>\n';
        output += row;
    }
    output += '</table>'
    $('#html-code').val($('#html-code').val() + output)
    $('#css-code').val($('#css-code').val() + `
table td{
    width: ${tcWidth}px;
    height: ${tcHeight}px;
    border: ${borderWidth}px ${borderType} ${borderColor};
}  
table{
    border-collapse: collapse;
    border: ${borderWidth}px ${borderType} ${borderColor};
}
    `);
    $('.pop-up').removeClass('shown');    
});


$('#create-list').on('click', () => {
    let listType = $('input[name="ol-ul-radio"]:checked').val();
    let output = `<${listType}>`
    const listItemsAmount = parseInt($('#list-items-amount').val());
    for (let i = 0; i < listItemsAmount; i++){
        output += `\n<li></li>`;
    }
    output += `\n</${listType}>`
    $('#html-code').val($('#html-code').val() + output)
    
});

$('.stylise-btn').on('click', () => {
    $('#stylise-popup').toggleClass('shown');
});

$('input[name="font-size-radio"]').on('change', () => {
    let fontSize = $('input[name="font-size-radio"]:checked').val();
    $('#code-result')[0].contentDocument.body.style.fontSize = fontSize;
}); 

$('#font-family-choice').on('change', () => {
    let fontFamily = $('#font-family-choice').val();
    $('#code-result')[0].contentDocument.body.style.fontFamily = fontFamily;
});

$('#text-color').on('input', () => {
    let color = $('#text-color').val();
    $('#code-result')[0].contentDocument.body.style.color = color;
})

$('#background-color').on('input', () => {
    let color = $('#background-color').val();
    $('#code-result')[0].contentDocument.body.style.backgroundColor = color;
})

$('#bold').on('change', () => {
    if ($('#bold').is(':checked')){
        $('#code-result')[0].contentDocument.body.style.fontWeight = 'bold';
    }else{
        $('#code-result')[0].contentDocument.body.style.fontWeight = 'normal';
    }
});

$('#italic').on('change', () => {
    if ($('#italic').is(':checked')){
        $('#code-result')[0].contentDocument.body.style.fontStyle = 'italic';
    }else{
        $('#code-result')[0].contentDocument.body.style.fontStyle = 'normal';
    }
});