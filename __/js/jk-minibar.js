/* jk minibar
 * (wiki.soimort.org)
 * last updated: 2016-05-07
 */
document.addEventListener('JKLoaded', function() {
  var main = document.getElementsByTagName('main')[0];
  main.style.transition = '.5s';

  // layout switch
  var ind = document.createElement('div');
  ind.className = 'jk-minibar';
  ind.style.display = 'block';
  ind.style.position = 'fixed';
  ind.style.bottom = '32px';
  ind.style.left = '32px';
  ind.style.opacity = '.25';
  ind.style.transition = '.25s';
  ind.innerHTML = '<i class="fa fa-indent fa-2x"></i>';
  document.body.appendChild(ind);
  var outd = document.createElement('div');
  outd.className = 'jk-minibar';
  outd.style.display = 'block';
  outd.style.position = 'fixed';
  outd.style.bottom = '32px';
  outd.style.left = '38.2%';
  outd.style.opacity = '0';
  outd.style.transition = '.25s';
  outd.innerHTML = '<i class="fa fa-outdent fa-2x"></i>';
  document.body.appendChild(outd);

  ind.addEventListener('mouseenter', function(event) {
    ind.style.opacity = '0';
    outd.style.opacity = '.25';

    var main = document.getElementsByTagName('main')[0];
    main.style.left = '38.2%';

    var header = document.getElementsByTagName('header')[0];
    header.style.position = 'fixed';
    header.style.width = '38.2%';
    header.style.left = '0';
    var toc = document.getElementById('TOC');
    toc.style.position = 'fixed';
    toc.style.width = '33.2%';
    toc.style.left = '5%';
    toc.style.top = '35%';
    toc.style.borderWidth = '0';
    toc.style.visibility = 'visible';
  });

  outd.addEventListener('mouseenter', function(event) {
    ind.style.opacity = '.25';
    outd.style.opacity = '0';

    var main = document.getElementsByTagName('main')[0];
    main.style.left = '20%';

    var header = document.getElementsByTagName('header')[0];
    header.style.position = 'relative';
    header.style.width = '100%';
    header.style.left = '0';
    var toc = document.getElementById('TOC');
    toc.style.position = 'relative';
    toc.style.width = '100%';
    toc.style.left = '0';
    toc.style.top = '0';
    toc.style.borderWidth = '1px';
    toc.style.visibility = 'hidden';
  });

  // help & status
  /*
  var help = document.createElement('div');
  help.className = 'jk-minibar';
  help.style.display = 'block';
  help.style.position = 'fixed';
  help.style.bottom = '32px';
  help.style.right = '32px';
  help.style.opacity = '.25';
  help.style.transition = '.5s';
  help.style.cursor = 'help';
  help.innerHTML = '<i class="fa fa-th fa-2x"></i>';
  document.body.appendChild(help);
  var stat = document.createElement('div');
  stat.className = 'jk-minibar';
  stat.style.display = 'block';
  stat.style.position = 'fixed';
  stat.style.bottom = '8px';
  stat.style.right = '32px';
  stat.style.opacity = '.5';
  stat.style.transition = '.5s';
  stat.style.width = '32px';
  stat.style.textAlign = 'center';
  document.body.appendChild(stat);

  help.addEventListener('mouseenter', function(event) {
    help.style.opacity = '.125';
    jkHelp();
  });

  help.addEventListener('mouseleave', function(event) {
    help.style.opacity = '.25';
    jkHideModal();
  });

  document.addEventListener('selectionchange', function(event) {
    var selectedText = jkGetSelectedText();
    if (selectedText) {
      stat.innerHTML = '<code>' + selectedText.length + '</code>';
    } else {
      stat.innerHTML = '';
    }
  });

  window.addEventListener('scroll', function(event) {
    help.style.opacity = '0';
    window.setTimeout(function() {
      help.style.opacity = '.25';
    }, 250);
  });
  */

});
