// javascript:void((function%20($)%20{var%20process_html,%20links;process_html%20=%20function%20(data)%20{var%20desc,%20title,%20value,%20est,%20reporter,%20id;data%20=%20$(data);desc%20=%20data.find(%27#description-full%27).html();title%20=%20data.find(%27#issue_header_summary%27).text();value%20=%20data.find(%27strong[title=%22Business%20Value%22]%27).next().text();est%20=%20data.find(%27strong[title=%22Story%20Points%22]%27).next().text();reporter%20=%20data.find(%27#reporter-val%20a%27).text();id%20=%20data.find(%27#key-val%27).text();jQuery(%27body%27).append(%27<div%20class=%22ppp%22%20style=%22page-break-after:always%22/>%27).find(%27div.ppp:last%27).prepend(%27<div%20style=%22clear:both;%22>%27).prepend(%27<div%20style=%22width:%20100%;%20font-size:10px%22>%27+desc+%27</div>%27).prepend(%27<div/>%27).children(%27:first%27).css(%27color%27,%20%27#fff%27).css(%27background-color%27,%20%27#666%27).css(%27-moz-border-radius%27,%20%2710px%27).css(%27-webkit-border-radius%27,%20%2710px%27).css(%27padding%27,%2710px%27).prepend(%27<div>%27).children(%27:first%27).text(%27Business%20Value:%20%27%20+%20(value%20?%20value%20:%20%27%27)).parent().prepend(%27<div/>%27).children(%27:first%27).css(%27float%27,%20%27right%27).css(%27width%27,%20%2750%%27).text(%27Story%20Points:%20%27%20+%20(est%20?%20est%20:%20%27%27)).parent().parent().prepend(%27<h1/>%27).children(%27:first%27).css(%27margin%27,%20%270px%27).text(title).parent().prepend(%27<div%20style=%22float:%20right;%20clear:right;%22/>%27).children(%27:first%27).prepend(%27<small>%27+reporter+%27</small>%27).parent().prepend(%27<div%20style=%22float:%20right;%22/>%27).children(%27:first%27).append(%27<small>%27+id+%27</small>%27).parent().prepend(%27<div%20style=%22float:%20right;%22/>%27).find(%27pre%27).css(%27font-size%27,%20%2710px%27);};jQuery(%27.ppp%27).remove();$(%27body%27).css(%27color%27,%20%27#333%27).css(%27font%27,%20%2716px/1.4%20arial,FreeSans,Helvetica,sans-serif%27).children().css(%27display%27,%20%27none%27);links%20=%20jQuery(%22#issuetable%20td.nav.issuekey%20a[href^=%27/browse/%27]%22);if%20(0%20!==%20links.size())%20{links.each(function%20()%20{var%20url;url%20=%20$(this).attr(%27href%27);$.get(url,%20process_html,%20%27html%27);});}%20else%20{process_html(%27body%27);}}(jQuery)))
(function ($) {
    var process_html, links;
    
    process_html = function (data) {
        var desc, title, value, est, reporter, id;
        data = $(data);
        
        desc = data.find('#description-full').html();
        title = data.find('#issue_header_summary').text();
        value = data.find('strong[title="Business Value"]').next().text();
        est = data.find('strong[title="Story Points"]').next().text();
        reporter = data.find('#reporter-val a').text();
        id = data.find('#key-val').text();
        
      jQuery('body').append('<div class="ppp" style="page-break-after:always"/>')
          .find('div.ppp:last')
          .prepend('<div style="clear:both;">')
          .prepend('<div style="width: 100%; font-size:10px">'+desc+'</div>')
          .prepend('<div/>')
          .children(':first')
          .css('color', '#fff')
          .css('background-color', '#666')
          .css('-moz-border-radius', '10px')
          .css('-webkit-border-radius', '10px')
          .css('padding','10px')
          .prepend('<div>')
          .children(':first')
          .text('Business Value: ' + (value ? value : ''))
          .parent()
          .prepend('<div/>')
          .children(':first')
          .css('float', 'right')
          .css('width', '50%')
          .text('Story Points: ' + (est ? est : ''))
          .parent()
          .parent()
          .prepend('<h1/>')
          .children(':first')
          .css('margin', '0px')
          .text(title)
          .parent()
          .prepend('<div style="float: right; clear:right;"/>')
          .children(':first')
          .prepend('<small>'+reporter+'</small>')
          .parent()
          .prepend('<div style="float: right;"/>')
          .children(':first')
          .append('<small>'+id+'</small>')
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

    links = jQuery("#issuetable td.nav.issuekey a[href^='/browse/']");

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