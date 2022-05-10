import React from "react";
import { brazilFlag, unitedKingdomFlag, spainFlag } from "../images";
import { useTranslation } from "react-i18next";
import { Box, Tooltip, IconButton } from "@material-ui/core";

const ChangeLanguage = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (selected) => () => {
    switch (selected) {
      case "pt":
        return i18n.changeLanguage("pt");
      case "en":
        return i18n.changeLanguage("en");
      case "es":
        return i18n.changeLanguage("es");
      default:
        return undefined;
    }
  };

  return (
    <Box display="flex" alignItems="center">
      <Tooltip
        data-testid="change-language-portuguese"
        title={t("components.change_language.portuguese")}
      >
        <IconButton
          aria-label={t("components.change_language.portuguese")}
          onClick={changeLanguage("pt")}
        >
          <img
            src={brazilFlag}
            alt={t("components.change_language.brazil_flag")}
            height={24}
            width={24}
          />
        </IconButton>
      </Tooltip>
      <Tooltip
        data-testid="change-language-english"
        title={t("components.change_language.english")}
      >
        <IconButton
          aria-label={t("components.change_language.english")}
          onClick={changeLanguage("en")}
        >
          <img
            src={unitedKingdomFlag}
            alt={t("components.change_language.united_kingdom_flag")}
            height={24}
            width={24}
          />
        </IconButton>
      </Tooltip>
      <Tooltip
        data-testid="change-language-spanish"
        title={t("components.change_language.spanish")}
      >
        <IconButton
          aria-label={t("components.change_language.spanish")}
          onClick={changeLanguage("es")}
        >
          <img
            src={spainFlag}
            alt={t("components.change_language.spain_flag")}
            height={24}
            width={24}
          />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default ChangeLanguage;
