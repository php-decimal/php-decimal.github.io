(function() {

var menu      = $('menu').eq(0);
var toggle    = $('menu');
var menuItems = $('menu a');

/**
 * Hides the mobile menu.
 */
function hideMobileMenu() {
    if (toggle.checked) {
        toggle.checked = false;
        menu.scrollTop = 0;
    }
}

// We want to make sure the menu is hidden if we're accessing an anchor.
$(window).on('hashchange', hideMobileMenu);

// When clicking a menu link, make sure the menu disappears.
menuItems.on('click', hideMobileMenu);

// Enable scroll spy with a delay to allow for anchor scrolling.
var timeout = window.location.hash ? 1000 : 0;

setTimeout(function() {
    gumshoe.init({
        selector:       'menu a', // Default link selector (must use a valid CSS selector)
        selectorHeader: 'header',    // Fixed header selector (must use a valid CSS selector)
        activeClass:    'current',   // Class to apply to active navigation link and its parent list item
        offset:         30,

        callback: function(e) {
            if (e) {
                history.replaceState(null, null, '#' + e.target.id);
            }
        }
    });
}, timeout);

// "Redirect" to the first menu item if none are currently active.
if (window.location.hash == false) {
    window.location.hash = "introduction";
}

hideMobileMenu();

/**
 * Sandbox
 */
var sandbox = ace.edit("sandbox-editor", {
    highlightActiveLine: false,
    cursorStyle: 'smooth',
    showGutter: false,
    highlightGutterLine: false,
    scrollPastEnd: false,
    theme: 'ace/theme/github',
    mode: "ace/mode/php",
    useSoftTabs: true,
    tabSize: 4,
    autoScrollEditorIntoView: false,
    vScrollBarAlwaysVisible: false,
    fontSize: "0.9em",
    fontFamily: "Fira Code",
    wrap: true,
    animatedScroll: false,
    printMargin: false,
    showInvisibles: false,
    displayIndentGuides: false,
    showFoldWidgets: false,
    selectionStyle: "line",
});



var insertTick;

var blankStart = "<?php\nuse Decimal\\Decimal;\n\n";

var examples = [
    blankStart + '$a = new Decimal("0.1");\n'
               + '$b = new Decimal("0.2");\n'
               + '$c = $a + $b - "0.3";\n'
               + '\n'
               + 'echo $c;',

    blankStart + '$a = new Decimal("1", 32);\n'
               + '$b = new Decimal("7");\n'
               + '\n'
               + 'print_r($a / $b);',

    blankStart + '$decimal = new Decimal("1", 32);\n'
               + '$decimal = $decimal->div(7)->mul(1000);\n'
               + '\n'
               + 'echo $decimal->toFixed(2, $commas = true);',

    blankStart + '$decimal = new Decimal("123456.789");\n'
               + '\n'
               + 'echo "$" . $decimal->toFixed(2, $commas = true);',

    blankStart + '/**\n'
               + ' * @param int $n The factorial to calculate, ie. $n!\n'
               + ' * @param int $p The precision to calculate the factorial to.\n'
               + ' *\n'
               + ' * @return Decimal\n'
               + ' */\n'
               + 'function factorial(int $n, int $p = Decimal::DEFAULT_PRECISION): Decimal\n'
               + '{\n'
               + '    return $n < 2 ? new Decimal($n, $p) : $n * factorial($n - 1, $p);\n'
               + '}\n'
               + '\n'
               + 'echo factorial(10000, 32);',
];


function setResult(result) {
    $("#sandbox-result").text(result).show();
}

function clearResult() {
    $("#sandbox-result").text("");
}

function hideResult() {
    $("#sandbox-result").hide();
}

function evaluate() {
    clearResult();
    $.post('http://192.241.150.198', {input: sandbox.getValue()}, setResult)
     .fail(function() {
        setResult("An error has occurred - most likely out of memory.");
     });
}

function clearEditor() {
    sandbox.setValue("");
}

function resetSandbox() {
    clearEditor();
    clearResult();
    hideResult();
    setAnimatedText(blankStart);
}

function getExample() {
    var example = examples.pop();
    examples.unshift(example);

    return example;
}

function setAnimatedText(text, callback) {
    clearEditor();
    clearResult();
    clearTimeout(insertTick);
    sandbox.setOptions({
        behavioursEnabled: false,
        wrapBehavioursEnabled: false,
    });

    var i = 0;
    insertTick = setInterval(function() {
        if (i < text.length) {
            sandbox.session.insert(sandbox.getCursorPosition(), text.charAt(i++))
        } else {
            clearTimeout(insertTick);
            sandbox.setOptions({
                behavioursEnabled: false,
                wrapBehavioursEnabled: false,
            });
            if (callback) {
                callback();
            }
        }
    }, 0);
}

function setExample() {
    setAnimatedText(getExample(), evaluate);
}

$("#sandbox-button-run").click(evaluate);
$("#sandbox-button-example").click(setExample);
$("#sandbox-button-clear").click(resetSandbox);

})();
