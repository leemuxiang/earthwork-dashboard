export interface MetricItem {
  label: string;
  value: string;
  chart_type: string;
  trend?: number[];
}

export interface HeaderBannerConfig {
  style: string;
  layout_engine?: any;
  top_left_decoration: {
    style: string;
    type: string;
    theme: string;
    visual_details: {
      main_subject: string;
      background: string;
      overlay_network: string;
      color_palette: string[];
    };
  };
  top_center_main: {
    style: string;
    title: string;
    subtitle: string;
    summary_text: string;
  };
  top_right_dashboard: {
    bg_image: {
      style: string;
      overlay: string;
      mask_opacity: number;
    };
    metrics: {
      style: string;
      text_color: string;
      items: MetricItem[];
    };
  };
}

export interface MiddleCardDataCenter {
  center_element: {
    type: string;
    description: string;
  };
  left_features: { text: string; icon: string }[];
  right_features: { text: string; icon: string }[];
}

export interface MiddleCardSystems {
  name: string;
  icon: string;
  desc?: string;
}

export interface MiddleCardRole {
  name: string;
  icon: string;
  avatarType?: 'human' | 'digital' | 'robot';
}

export interface MiddleCardApp {
  name: string;
  tag: string;
  color: string;
  layout: string;
  icon_description: string;
}

export interface MiddleCardConfig {
  code: string;
  title: string;
  subtitle?: string;
  style: string;
  layout?: string;
  data_center_feature?: MiddleCardDataCenter;
  items?: MiddleCardSystems[];
  roles?: MiddleCardRole[];
  cycle_nodes?: string[];
  core_concept?: string;
  applications?: MiddleCardApp[];
}

export interface FlowStep {
  stage: string;
  sub_tag: string;
  icon: string;
  num?: string;
}

export interface FlowFeature {
  text: string;
  icon_description: string;
}

export interface GeologicalLayer {
  layer_code: string;
  thickness: string;
  elevation: string;
  color: string;
  description?: string;
}

export interface GeologicalChart {
  type: string;
  elevation_range: string;
  elevation_lines: {
    label: string;
    value: string;
    style: string;
  }[];
  calculation_labels: {
    type: string;
    value: string;
    position: string;
  }[];
  geological_layers: GeologicalLayer[];
}

export interface PhoneDeviceContent {
  header: {
    title: string;
    notice: string;
    back_button: boolean;
  };
  sections: {
    type: string;
    title: string;
    subtitle: string;
    chart: GeologicalChart;
  }[];
}

export interface BottomFooterConfig {
  style?: string;
  layout_engine?: any;
  bottom_left_flow: {
    style: string;
    title: string;
    steps: FlowStep[];
    bottom_features: FlowFeature[];
  };
  bottom_right_app: {
    style: string;
    layout: string;
    left_content: {
      tag: {
        text: string;
        style: string;
        layout: string;
      };
      app_name: string;
      description: string;
      feature_icons: {
        layout: string;
        items: { name: string; icon_description: string }[];
      };
    };
    right_content: {
      device_mockup: {
        render_control: {
          display_mode: string;
          screen_count: number;
        };
        device: string;
        screen_content: PhoneDeviceContent;
      };
    };
  };
}

export interface DashboardData {
  theme: {
    style: string;
    primary_color: string;
    accent_color: string;
    background_color: string;
    card_background_color: string;
    text_color: string;
  };
  top_header_banner: HeaderBannerConfig;
  middle_cards: MiddleCardConfig[];
  bottom_footer: BottomFooterConfig;
}
