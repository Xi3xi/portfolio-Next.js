"use client";

import buttonStyles from './ui/CuteButton.module.css';
import React, { useEffect } from 'react';

export function CuteButton({
    frontInfo,
    back,
    otherClass
}) {
    useEffect(() => {
        const btnHeads = document.querySelectorAll('.btn-head');
      
        btnHeads.forEach(function (btnHead) {
        const beforeContent = btnHead.getAttribute('data-before');
        const afterContent = btnHead.getAttribute('data-after');
      
        // Set content for ::before
        btnHead.style.setProperty('--before-content', `"${beforeContent}"`);
        // Set content for ::after
        btnHead.style.setProperty('--after-content', `"${afterContent}"`);
        });
    }, [])

    return (
      <div className={`${buttonStyles.btnHead} ${otherClass}`} data-before={frontInfo} data-after={back}>
      </div>
    )
}