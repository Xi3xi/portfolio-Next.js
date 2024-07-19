import photoStyles from './Photo.module.css';
import React from 'react';

export function Photo() {
    return (
        <div className={photoStyles['home-photo']}>
             <div className={photoStyles['photo']}>
                    <div className={photoStyles['surrounding']}>
                        <span className={photoStyles['span']}></span>
                        <span className={photoStyles['span']}></span>
                        <span className={photoStyles['span']}></span>
                        <span className={photoStyles['span']}></span>
                    </div> 
                    <div className={photoStyles['photo-bg']}>
                        {/* {background} */}
                        <img src="background.png" alt="Background"/>
                    </div>
                    <div className={photoStyles['object']}>
                        {/* {role} */}
                        <img src="role.png" alt="Role"/>
                    </div>
                </div>       
        </div>
    )
}