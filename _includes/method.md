<div id="{{ include.method.name }}" class="method-info">
    <div class="method-info-header">
        <span class="method-info-name">
            {%- if include.method.static -%}
            Decimal::<strong>{{ include.method.name }}</strong>
            {%- else -%}
            -><strong>{{ include.method.name }}</strong>
            {%- endif -%}
        </span><!--
        --><span class="method-info-punc">(</span>

        {%- for param in include.method.params -%}
            <span class="method-info-param-type">{{ param.type }}</span>
            <span class="method-info-param-name">${{ param.name }}</span>
            {%- if param.default -%}
                <span class="method-info-punc"> = </span>
                <span class="method-info-param-default">{{ param.default }}</span>
            {%- endif -%}

            {%- if forloop.last == false -%}
                <span class="method-info-punc">,&nbsp;</span>
            {%- endif -%}
        {%- endfor -%}

        <span class="method-info-punc">)</span>

        {%- if include.method.return.type -%}
            <span class="method-info-punc">:</span>
            <span class="method-info-return-type">{{ include.method.return.type }}</span>
        {%- endif -%}

    </div>
    <div class="method-info-body">
        {%- if include.method.desc -%}
            <p class="method-info-body-desc">{{ include.method.desc }}</p>
        {%- endif -%}

        {%- if include.method.return.type -%}
            <div class="method-info-return">
                <span class="method-info-return-lead">Returns:&nbsp;</span>
                <div class="method-info-indent">
                    {% if include.method.return.hide != false %}
                        <span class="method-info-return-type">{{ include.method.return.type }},</span>
                    {% endif %}
                    <span class="method-info-return-text">{{ include.method.return.desc }}</span>
                </div>
            </div>
        {%- endif -%}

        {%- if include.method.throws -%}
        <div class="method-info-throws">
            <span class="method-info-throws-lead">Throws: </span>
            <div class="method-info-indent">
                <ul class="method-info-throws-text">
                    {%- for throw in include.method.throws -%}
                        <li>
                            <span class="method-info-throw-type">{{ throw.type }}</span>
                            <span class="method-info-throw-desc">{{ throw.desc }}</span>
                        </li>
                    {%- endfor -%}
                </ul>
            </div>
        </div>
        {%- endif -%}

        {%- if include.method.since -%}
            <div class="method-info-since">
                <span class="method-info-since-lead">Since: </span>
                <div class="method-info-indent">
                    <p class="method-info-since-text">{{ include.method.since }}</p>
                </div>
            </div>
        {%- endif -%}
    </div>
</div>
