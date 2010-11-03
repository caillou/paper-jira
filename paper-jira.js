(function ($) {
    var process_html, links;

    process_html = function (data) {
        var title, id, parent_id;

        data = $(data);

        parent_id = data.find('#parent_issue_summary').attr('href').replace(/.*\/([^/]*)$/, '$1');
        title = data.find('#issue_header_summary').text();
        id = data.find('#key-val').text();

        jQuery('body').append('<div class="ppp" style="page-break-after:always"/>')
            .find('div.ppp:last')
            .prepend('<div style="width: 100%; clear:both;">')
            .prepend('<div style="font-size:92px">'+title+'</div>')
            .children(':first')
            .prepend('<hr />')
            .children(':first')
            .prepend('<div>')
            .children(':first')
            .parent()
            .prepend('<div/>')
            .children(':first')
            .css('float', 'right')
            .parent()
            .parent()
            .prepend('<h1 style="font-size: 92px;"/>')
            .children(':first')
            .css('margin', '0px')
            .text(parent_id)
            .parent()
            .prepend('<div style="float: right; clear:right;"/>')
            .children(':first')
            .parent()
            .prepend('<div style="float: right;"/>')
            .children(':first')
            .append('<div style="font-size: 72px;">('+id+')</div>')
            .parent()
            // the following div is added in order to fix
            // a wired printing bug
            .prepend('<div style="float: right;"/>')
            .find('pre').css('font-size', '10px');
    };

    jQuery('.ppp').remove();
    $('body').css('color', 'black')
        .css('font', '16px/1.4 arial,FreeSans,Helvetica,sans-serif')
        .css('font-weight', 'bold')
        .children()
        .css('display', 'none');

    links = jQuery("#view-subtasks td.stsummary a[href^='/browse/']");

    if (0 !== links.size()) {
        // this is an overview page
        links.each(function () {
            var url;
            url = $(this).attr('href');
            $.get(url, process_html, 'html');
        });
    } else {
        process_html('body');
    }

}(jQuery));
