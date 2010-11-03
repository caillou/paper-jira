(function ($) {
    var process_html, links;
    
    process_html = function (data) {
        var desc, title, value, est, reporter, id, parent_id;
        
        
        data = $(data);
        
        parent_id = data.find('#parent_issue_summary').attr('href').replace(/.*\/([^/]*)$/, '$1');
        desc = data.find('#description-full').html();
        title = data.find('#issue_header_summary').text();
        value = data.find('strong[title="Business Value"]').next().text();
        est = data.find('strong[title="Story Points"]').next().text();
        reporter = data.find('#reporter-val a').text();
        id = data.find('#key-val').text();
        
      jQuery('body').append('<div class="ppp" style="page-break-after:always"/>')
          .find('div.ppp:last')
          .prepend('<div style="clear:both;">')
          .prepend('<div style="width: 100%; font-size:92px">'+title+'</div>')
          .prepend('<div/>')
          .children(':first')
          .css('color', '#fff')
          .css('background-color', '#666')
          .css('-moz-border-radius', '10px')
          .css('-webkit-border-radius', '10px')
          .css('padding','10px')
          .prepend('<div>')
          .children(':first')
          .parent()
          .prepend('<div/>')
          .children(':first')
          .css('float', 'right')
          .css('width', '50%')
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
          .append('<small style="font-size: 74px;">'+id+'</small>')
          .parent()
          // the following div is added in order to fix
          // a wired printing bug
          .prepend('<div style="float: right;"/>')
          .find('pre').css('font-size', '10px');
    };

    jQuery('.ppp').remove();
    $('body').css('color', '#333')
        .css('font', '16px/1.4 arial,FreeSans,Helvetica,sans-serif')
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