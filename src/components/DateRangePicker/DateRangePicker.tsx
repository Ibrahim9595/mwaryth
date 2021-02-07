import React from "react";
import { Input, Popup, Button, Grid, Header } from "semantic-ui-react";
import { useTranslation } from "react-i18next";

interface DateRangePickerProps {
  start: string;
  end: string;
  onChange: (updated: { start: string; end: string }) => void;
}

export const DateRangePicker = ({
  start,
  end,
  onChange,
}: DateRangePickerProps) => {
  const { i18n } = useTranslation();
  const handleStartChange = (date: any) => {
    onChange({ start: date.target.value, end });
  };

  const handleEndChange = (date: any) => {
    onChange({ start, end: date.target.value });
  };

  return (
    <Popup
      trigger={
        <Button>
          {i18n.t("UPDATE_PERIOD")} ({start}-{end})
        </Button>
      }
      flowing
      hoverable
      position="top center"
    >
      <Grid centered columns={2}>
        <Grid.Column textAlign="center">
          <Header as="h4">{i18n.t("START_DATE")}</Header>
          <Input
            type="date"
            max={end}
            value={start}
            onChange={handleStartChange}
          />
        </Grid.Column>
        <Grid.Column textAlign="center">
          <Header as="h4">{i18n.t("END_DATE")}</Header>
          <Input
            type="date"
            min={start}
            value={end}
            onChange={handleEndChange}
          />
        </Grid.Column>
      </Grid>
    </Popup>
  );
};
