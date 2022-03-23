import gold_credit from "../images/cards/gold_credit_card.png";
import Grameenphone_credit_card from "../images/cards/Grameenphone_credit_card.png";
import rovi_elite_credit_card from "../images/cards/rovi_elite_credit_card.png";
import super_value_titanium_credit_card from "../images/cards/super_value_titanium_credit_card.jpg";
import visa_signature_cedit_card from "../images/cards/visa_signature_cedit_card.png";
import visa_silver_credit_card from "../images/cards/visa_silver_credit_card.png";
import platinum_card from "../images/cards/platinum_card.jpg";
import bd_signature_bannercard from "../images/cards/bd_signature_banner.jpg";
import bd_platinum_bannercard from "../images/cards/bd_platinum_banner.webp";
import bd_gold_bannercard from "../images/cards/bd-gold-card-banner.webp";
import bd_silver_card_banner from "../images/cards/bd_silver_card_banner.webp";
import bd_titanium_card_banner from "../images/cards/bd_titanium_card_banner.jpg";

function imageService(imageName) {
  const images = {
    gold_credit: gold_credit,
    Grameenphone_credit_card,
    rovi_elite_credit_card,
    super_value_titanium_credit_card,
    visa_signature_cedit_card,
    visa_silver_credit_card,
    platinum_card,
    bd_signature_bannercard,
    bd_platinum_bannercard,
    bd_gold_bannercard,
    bd_titanium_card_banner,
    bd_silver_card_banner: bd_silver_card_banner,
  };
  return images[imageName];
}

export default imageService;
