$(document).ready(() => {
    // Post rails
    $('.ui.sticky').sticky({
        context: '.post-content',
        offset: 20
    });

    $('#search-field').ghostHunter({
        results: '#results',
        onKeyUp: true,
        includePages: true,
        displaySearchInfo: false,
        onComplete: (results) => {
            if ($('#search-field').prop('value')) {
                $('#results').show();
            } else {
                $('#results').hide();
            }
            $('.search.input').removeClass('loading');
        },
        result_template: '<div id="gh-{{ref}}" class="category gh-search-item">' +
            '<div class="name">{{pubDate}}</div><div class="results transition visible"' +
            ' style="display: table-cell !important;"><a class="result" href="{{link}}">' +
            '<div class="content"><div class="title">{{title}}</div><div class="description">{{description}}</div></div></a>' +
            '</div></div>'
    });
    $('#search-field').keyup(() => $('.search.input').addClass('loading'))
        .keydown(() => $('.search.input').addClass('loading'));
});