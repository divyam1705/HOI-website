import React from 'react';

const ContactLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <main>
                {children}
            </main>
        </div>
    );
};

export default ContactLayout;