import { ButtonSubscription } from "./Subscription.styles";
import { INoticiasNormalizadas } from "../types";

const SubscriptionButton = ({
  setModal,
}: {
  setModal: React.Dispatch<React.SetStateAction<INoticiasNormalizadas | null>>;
}) => {
  return (
    <ButtonSubscription
      onClick={() =>
        setTimeout(() => {
          alert("Suscripto!");
          setModal(null);
        }, 1000)
      }>
      Suscríbete
    </ButtonSubscription>
  );
};

export default SubscriptionButton;
