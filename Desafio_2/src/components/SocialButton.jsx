import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialButton = (facebook, twitter) => {
    return (
        <div>
            <FontAwesomeIcon icon={facebook} />
            <FontAwesomeIcon icon={twitter} />
        </div>
    );
};

export default SocialButton;
