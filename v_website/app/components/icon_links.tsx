import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

interface Props extends React.PropsWithChildren{
    className?: string;
    link: Url;
}

const IconLink : React.FC<Props> = ({ className, children, link}) => {
    return(
        <div className={className}>
            <Link href={link}>
                {children}
            </Link>
        </div>
    )
}

export default IconLink;