---
layout: default
permalink: /
---

{{ site.data.project.title }} {#introduction}
============

[![Build Status](https://img.shields.io/travis/{{ site.data.project.github }}.svg?style=flat-square&branch=master)](https://travis-ci.org/{{ site.data.project.github }}){:class="shield"}

---

<a class="source" href="https://github.com/{{ site.data.project.github }}">
    <img src="{{ site.baseurl }}/assets/images/github.png">
    {{ site.data.project.github }}
</a>

{% include introduction.md %}
{% include installation.md %}
{% include basic-usage.md %}
{% include sandbox.md %}
{% include performance.md %}
{% include attributes.md %}
{% include rounding.md %}
{% include comparing.md %}
{% include converting.md %}
{% include arithmetic.md %}
