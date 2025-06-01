const Footer = () => {
    return (
        <footer className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 text-sm p-6 bg-[#858D7E] text-slate-100 flex-wrap">
            <div className="flex-1">
                <p>
                    <strong>Novi Nest</strong> acknowledges the Traditional Custodians of the land on which we work, the Gadigal people of the Eora Nation. We pay our deepest respect to elders past, present and emerging. 
                    We are a proudly inclusive organisation and an ally of the LGBTIQ+ community and the movement toward equality.
                </p>
            </div>

            <div className="flex flex-row justify-center items-center gap-2 md:gap-4">
                <img src="/aboriginal-flag.png" alt="Aboriginal flag of Australia" className="w-12 md:w-24" />
                <img src="/torres-strait-islands.png" alt="Torres Strait Islander flag of Australia" className="w-12 md:w-24" />
                <img src="/lgbt-flag.png" alt="LGBTQ+ Progress Pride flag" className="w-12 md:w-24" />
            </div>

            <div className="flex flex-col md:items-end md:text-right gap-2">
                <p>&copy; 2025 <strong>Novi Nest</strong>. All rights reserved.</p>
                <p>
                Website developed by{' '}
                    <a className="underline text-blue-100" href="mailto:bjsmerd@gmail.com">
                        Ben Smerd
                    </a>.
                </p>
            </div>
        </footer>
    );
};

export default Footer;