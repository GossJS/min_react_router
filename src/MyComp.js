import React, { Component as C } from 'react';

export default ({ title = 'Компо', text = 'Контент' }) => <div>
  <article class="message">
    <div class="message-header">
      <p>{ title }</p>
    </div>
    <div class="message-body"> { text }</div>
  </article>
</div>;
