## Sandbox

<div id="sandbox-container">
    <div id="sandbox-editor-container">
        <div id="sandbox-editor"><!--

--><?php
use Decimal\Decimal;

$a = new Decimal("0.1");
$b = new Decimal("7.0");

echo $a / $b;
</div>
    </div>
    <div id="sandbox-buttons">
        <button id="sandbox-button-run" type="button">Run</button>
        <button id="sandbox-button-example" type="button">Example</button>
        <button id="sandbox-button-clear" type="button">Reset</button>
    </div>
    <textarea id="sandbox-result" readonly></textarea>
</div>
