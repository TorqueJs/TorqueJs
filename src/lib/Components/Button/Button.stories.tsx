import React from 'react';
import { TorqueButton } from './Button.Component';
import { ComponentStory } from '@storybook/react';
import { TorqueService } from '../../Torque';
import { DefaultThemes } from '../../Types/Theme';
import { TorqueButtonProps } from './Button.Types';

const Icons = [
    '3drotation',
    'accessibility_new',
    'accessibility',
    'accessible',
    'accessible_forward',
    'account_balance_wallet',
    'account_balance',
    'account_box',
    'account_circle',
    'add_shopping_cart',
    'add_task',
    'add_to_drive',
    'addchart',
    'admin_panel_settings',
    'alarm_add',
    'alarm_off',
    'alarm_on',
    'alarm',
    'all_inbox',
    'all_out',
    'analytics',
    'anchor',
    'android',
    'announcement',
    'api',
    'app_blocking',
    'arrow_circle_down',
    'arrow_circle_up',
    'arrow_right_alt',
    'article',
    'aspect_ratio',
    'assessment',
    'assignment_ind',
    'assignment_late',
    'assignment_return',
    'assignment_returned',
    'assignment_turned_in',
    'assignment',
    'autorenew',
    'backup_table',
    'backup',
    'batch_prediction',
    'book_online',
    'book',
    'bookmark_border',
    'bookmark',
    'bookmarks',
    'bug_report',
    'build_circle',
    'build',
    'cached',
    'calendar_today',
    'calendar_view_day',
    'camera_enhance',
    'cancel_schedule_send',
    'card_giftcard',
    'card_membership',
    'card_travel',
    'change_history',
    'check_circle_outline',
    'check_circle',
    'chrome_reader_mode',
    'circle_notifications',
    'class',
    'close_fullscreen',
    'code',
    'comment_bank',
    'commute',
    'compare_arrow',
    'compress',
    'contact_page',
    'contact_support',
    'contactless',
    'copyright',
    'credit_card',
    'dangerous',
    'dashboard_customize',
    'dashboard',
    'date_range',
    'delete_forever',
    'delete_outline',
    'delete',
    'description',
    'disabled_by_default',
    'dns',
    'done_all',
    'done_outline',
    'done',
    'donut_large',
    'donut_small',
    'drag_indicator',
    'dynamic_form',
    'eco',
    'edit_off',
    'eject',
    'euro_symbol',
    'event_seat',
    'event',
    'exit_to_app',
    'expand',
    'explore_off',
    'explore',
    'extension',
    'face_unlock',
    'face',
    'fact_check',
    'favorite_border',
    'favorite',
    'feedback',
    'file_present',
    'filter_alt',
    'filter_list_alt',
    'find_in_page',
    'find_replace',
    'fingerprint',
    'fit_screen',
    'flaky',
    'flight_land',
    'flight_takeoff',
    'flip_to_back',
    'flip_to_front',
    'g_translate',
    'gavel',
    'get_app',
    'gif',
    'grade',
    'grading',
    'group_work',
    'help_center',
    'help_outline',
    'help',
    'highlight_alt',
    'highlight_off',
    'history_toggle_off',
    'history',
    'home_filled',
    'home',
    'horizontal_split',
    'hourglass_disabled',
    'hourglass_empty',
    'hourglass_full',
    'http',
    'https',
    'important_devices',
    'info_outline',
    'info',
    'input',
    'integration_instructions',
    'invert_colors',
    'label_important_outline',
    'label_important',
    'label_off',
    'label_outline',
    'label',
    'language',
    'launch',
    'leaderboard',
    'lightbulb_outline',
    'lightbulb',
    'line_style',
    'line_weight',
    'list',
    'lock_clock',
    'lock_open',
    'lock_outline',
    'lock',
    'login',
    'logout',
    'loyalty',
    'mark_as_unread',
    'markunread_mailbox',
    'maximize',
    'mediation',
    'minimize',
    'model_training',
    'next_plan',
    'nightline_round',
    'not_accessible',
    'not_started',
    'note_add',
    'offline_bolt',
    'offline_pin',
    'online_prediction',
    'opacity',
    'open_in_browser',
    'open_in_full',
    'open_in_new',
    'open_with',
    'outbond',
    'outbox',
    'outgoing_mail',
    'outlet',
    'pageview',
    'pan_tool',
    'payment',
    'pending_actions',
    'pending',
    'perm_camera_mic',
    'perm_contact_calendar',
    'perm_contact_calendar',
    'perm_data_setting',
    'perm_device_information',
    'perm_identity',
    'perm_media',
    'perm_phone_msg',
    'perm_scan_wifi',
    'pets',
    'picture_in_picture_alt',
    'picture_in_picture',
    'plagiarism',
    'play_for_work',
    'polymer',
    'power_settings_new',
    'pregnant_woman',
    'preview',
    'print',
    'privacy_tip',
    'published_with_changes',
    'query_builder',
    'question_answer',
    'quickreply',
    'receipt',
    'record_voice_over',
    'redeem',
    'remove_done',
    'remove_shopping_cart',
    'reorder',
    'report_problem',
    'request_page',
    'restore_from_trash',
    'restore_page',
    'restore',
    'room',
    'rounded_corner',
    'rowing',
    'rule',
    'saved_search',
    'schedule_send',
    'schedule',
    'search_off',
    'search',
    'segment',
    'send_and_archive',
    'settings_applications',
    'settings_backup_restore',
    'settings_bluetooth',
    'settings_brightness',
    'settings_cell',
    'settings_ethernet',
    'settings_input_antenna',
    'settings_input_component',
    'settings_input_composite',
    'settings_input_hdmi',
    'settings_input_svideo',
    'settings_overscan',
    'settings_phone',
    'settings_power',
    'settings_remote',
    'settings_voice',
    'settings',
    'shop_two',
    'shop',
    'shopping_bag',
    'shopping_basket',
    'shopping_cart',
    'smart_button',
    'source',
    'speaker_notes_off',
    'speaker_notes',
    'spellcheck',
    'star_rate',
    'stars',
    'sticky_note_2',
    'store',
    'subject',
    'subtitles_off',
    'supervised_user_circle',
    'supervisor_account',
    'support',
    'swap_horiz',
    'swap_horizontal_circle',
    'swap_vert',
    'swap_vertical_circle',
    'swipe',
    'sync_alt',
    'system_update_alt',
    'tab_unselected',
    'tab',
    'table_view',
    'text_rotate_up',
    'text_rotate_vertical',
    'text_rotate_angledown',
    'text_rotate_angleup',
    'text_rotate_down',
    'text_rotate_none',
    'theaters',
    'thumb_down_off_alt',
    'thumb_down',
    'thumb_up_off_alt',
    'thumb_up',
    'thumbs_up_down',
    'timeline',
    'toc',
    'today',
    'toll',
    'touch_app',
    'tour',
    'track_changes',
    'translate',
    'trending_down',
    'trending_flat',
    'trending_flat',
    'trending_up',
    'turned_in_not',
    'turned_in',
    'unpublished',
    'update',
    'upgrade',
    'verified_user',
    'verified',
    'vertical_split',
    'view_agenda',
    'view_array',
    'view_carousel',
    'view_column',
    'view_day',
    'view_headline',
    'view_in_ar',
    'view_list',
    'view_module',
    'view_quilt',
    'view_sidebar',
    'view_stream',
    'view_week',
    'visibility_off',
    'visibility_off',
    'visibility',
    'voice_over_off',
    'watch_later',
    'wifi_protected_setup',
    'work_off',
    'work_outline',
    'work',
    'wysiwyg',
    'youtube_searched_for',
    'zoom_in',
    'zoom_out',
    'trip_origin',
    'bike_scooter',
    'push_pin',
    'vertical_align_center',
    'timelapse',
    'local_car_wash',
    'filter_4',
    'motion_photos_off',
    'rv_hookup',
    'signal_cellular_no_sim',
    'volume_mute',
    'notes',
    'sd',
    'how_to_reg',
    'branding_watermark',
    'do_not_disturb_off',
    'videocam_off',
    'sports',
    'local_post_office',
    'no_drinks',
    'queue',
    'check_box_outline_blank',
    'markunread',
    'power_input',
    'stream',
    'add_alarm',
    'closed_caption',
    'picture_as_pdf',
    'ballot',
    'house',
    'add_link',
    'create',
    'drive_eta',
    'sports_golf',
    'hourglass_top',
    'browser_not_supported',
    'camera_rear',
    'sd_storage',
    'reset_tv',
    'keyboard_arrow_up',
    'subscript',
    'local_fire_department',
    'baby_changing_station',
    'local_taxi',
    'hearing_disabled',
    'wifi_tethering',
    'filter_5',
    'airplay',
    'support_agent',
    'broken_image',
    'forward_5',
    'blur_circular',
    'screen_lock_landscape',
    'arrow_drop_up',
    'filter_none',
    'rice_bowl',
    'control_point',
    'repeat',
    'flight',
    'luggage',
    'local_library',
    'filter_7',
    'assistant',
    'mail_outline',
    'arrow_drop_down_circle',
    'microwave',
    'atm',
    'account_tree',
    'straighten',
    'public',
    'border_clear',
    'stay_current_landscape',
    'padding',
    'south',
    'reply',
    'signal_cellular_off',
    'fiber_smart_record',
    'monochrome_photos',
    'not_interested',
    'phone_missed',
    'crop_portrait',
    'house_siding',
    'approval',
    'location_searching',
    'mode_comment',
    'network_wifi',
    'wb_auto',
    'hearing',
    'taxi_alert',
    'person_search',
    'font_download',
    'agriculture',
    'charging_station',
    'umbrella',
    'run_circle',
    'highlight',
    'fullscreen',
    'local_activity',
    'remove_circle_outline',
    'crop_square',
    'swap_calls',
    'replay_30',
    'assistant_direction',
    'av_timer',
    'restaurant',
    'fireplace',
    'directions_boat',
    'color_lens',
    'mark_chat_read',
    'panorama',
    'pool',
    'directions_transit',
    'roofing',
    'filter_6',
    'wb_twighlight',
    'circle',
    'volume_up',
    'person',
    'desktop_mac',
    'airline_seat_recline_extra',
    'sports_volleyball',
    'smartphone',
    'directions_railway',
    'filter_2',
    'insert_drive_file',
    'assistant_navigation',
    'attach_email',
    'format_align_center',
    'fastfood',
    'exposure_plus_1',
    'forward_10',
    'festival',
    'backpack',
    'pest_control',
    'battery_std',
    'local_pizza',
    'filter_b_and_w',
    'departure_board',
    'ring_volume',
    'emoji_emotions',
    'dock',
    'local_cafe',
    'save_alt',
    'photo_camera_back',
    'nfc',
    'cancel',
    'usb',
    'filter_drama',
    'tapas',
    'person_outline',
    'mood',
    'phone_in_talk',
    'fast_rewind',
    'art_track',
    'ad_units',
    'blur_off',
    'outdoor_grill',
    'bedtime',
    'brightness_medium',
    'no_encryption',
    'auto_stories',
    'home_work',
    'print_disabled',
    'border_left',
    'emoji_objects',
    'crop',
    'airline_seat_individual_suite',
    'cast_for_education',
    'tag',
    'storefront',
    'animation',
    'toggle_off',
    'hot_tub',
    'photo_size_select_actual',
    'self_improvement',
    'liquor',
    'filter_3',
    'arrow_downward',
    'monetization_on',
    'arrow_back',
    'wb_cloudy',
    'border_outer',
    'breakfast_dining',
    'cloud_download',
    'call_made',
    'hvac',
    'alternate_email',
    'brightness_low',
    'strikethrough_s',
    'filter_1',
    'headset',
    'east',
    'folder_special',
    'filter_tilt_shift',
    'time_to_leave',
    'map',
    'horizontal_rule',
    'inbox',
    'sim_card',
    'military_tech',
    'loupe',
    'power',
    'chat_bubble',
    'mms',
    'replay_circle_filled',
    'bakery_dining',
    'rss_feed',
    'screen_search_desktop',
    'north_east',
    'exposure_plus_2',
    'border_all',
    'mic_none',
    'transform',
    'sports_cricket',
    'phone_enabled',
    'sentiment_satisfied',
    'do_not_disturb_on',
    'speed',
    'center_focus_strong',
    'link_off',
    'wb_iridescent',
    'auto_awesome_motion',
    'collections_bookmark',
    'scatter_plot',
    'person_add_disabled',
    'sentiment_very_dissatisfied',
    'subtitles',
    'format_align_left',
    'games',
    'library_add_check',
    'plus_one',
    'desktop_access_disabled',
    'devices',
    'rtt',
    'voicemail',
    'clear',
    'call_missed_outgoing',
    'data_usage',
    'center_focus_weak',
    'signal_wifi_off',
    'local_dining',
    'event_busy',
    'miscellaneous_services',
    'remove_moderator',
    'format_quote',
    'store_mall_directory',
    'signal_wifi_0_bar',
    'live_help',
    'network_locked',
    'home_repair_service',
    'photo_album',
    'add_moderator',
    'notifications_off',
    'directions_bus',
    'zoom_out_map',
    'cloud_done',
    'stroller',
    'medical_services',
    'dry',
    'camera_roll',
    'wrap_text',
    'more_time',
    'whatshot',
    'keyboard',
    'format_strikethrough',
    'apartment',
    'voice_chat',
    'sensor_window',
    'border_horizontal',
    'car_rental',
    'brightness_high',
    'toys',
    'fiber_dvr',
    'sentiment_dissatisfied',
    'view_comfy',
    'portrait',
    'developer_mode',
    'insert_emoticon',
    'phonelink_off',
    'headset_mic',
    'nat',
    'stop_circle',
    'north',
    'inventory',
    'developer_board',
    'location_pin',
    'sports_mma',
    'arrow_left',
    'euro',
    'link',
    'countertops',
    'dehaze',
    'system_update',
    'cloud_upload',
    'crop_free',
    'table_rows',
    'surround_sound',
    'contact_phone',
    'access_alarm',
    'repeat_one',
    'bathtub',
    'phonelink',
    'grid_on',
    'motion_photos_on',
    'notification_important',
    'landscape',
    'policy',
    'playlist_play',
    'add_location_alt',
    'file_download_done',
    'file_download',
    'healing',
    'insert_photo',
    'group_add',
    'brush',
    'library_books',
    'water_damage',
    'colorize',
    'wallpaper',
    'park',
    'smoke_free',
    'linear_scale',
    'local_movies',
    'wine_bar',
    'movie_creation',
    'sports_esports',
    'format_textdirection_r_to_l',
    'where_to_vote',
    'phone_android',
    'group',
    'fiber_manual_record',
    'sports_football',
    'local_phone',
    'last_page',
    'double_arrow',
    'directions_car',
    'menu_book',
    'remove_from_queue',
    'format_italic',
    'movie',
    'archive',
    'format_color_reset',
    'beenhere',
    'dialer_sip',
    'pie_chart',
    'escalator_warning',
    'screen_rotation',
    'add_circle_outline',
    'lens',
    'nights_stay',
    'pause_circle_filled',
    'mail',
    'school',
    'north_west',
    'title',
    'sports_baseball',
    'panorama_vertical',
    'format_underlined',
    'shield',
    'note',
    'west',
    'drive_file_rename_outline',
    'apps',
    'no_photography',
    'drive_file_move',
    'desktop_windows',
    'missed_video_call',
    'insert_chart_outlined',
    'filter_center_focus',
    'campaign',
    'directions_bike',
    'laptop_chromebook',
    'keyboard_arrow_down',
    'edit_location',
    'details',
    'money_off',
    'library_music',
    'phonelink_lock',
    'ondemand_video',
    'bolt',
    'tv',
    'sms',
    'photo_camera_front',
    'playlist_add',
    'adb',
    'electric_rickshaw',
    'location_off',
    'electric_car',
    'duo',
    'photo_size_select_large',
    'videocam',
    'satellite',
    'nightlife',
    'bar_chart',
    'mp',
    'directions_run',
    'indeterminate_check_box',
    'layers_clear',
    'offline_share',
    'signal_cellular_4_bar',
    'volume_off',
    'layers',
    'radio',
    'send_to_mobile',
    'panorama_wide_angle_select',
    'local_laundry_service',
    'add_location',
    'mark_email_unread',
    'speaker_phone',
    'workspaces_filled',
    'fiber_pin',
    'hotel',
    'terrain',
    'queue_music',
    'local_printshop',
    'train',
    'photo_size_select_small',
    'error_outline',
    'local_florist',
    'sentiment_very_satisfied',
    'place',
    'casino',
    'calculate',
    'switch_camera',
    'phone_forwarded',
    'chevron_right',
    'tap_and_play',
    'cake',
    'panorama_wide_angle',
    'exposure_zero',
    'recommend',
    'stacked_line_chart',
    'cast',
    'history_edu',
    'flag',
    'person_add_alt',
    'near_me',
    'closed_caption_off',
    'list_alt',
    'chevron_left',
    'pause_circle_outline',
    'mark_chat_unread',
    'event_available',
    'wb_sunny',
    'emoji_events',
    'stop',
    'science',
    'access_time',
    'moped',
    'motion_photos_paused',
    'panorama_fish_eye',
    'forum',
    'do_not_step',
    'audiotrack',
    'location_disabled',
    'arrow_right',
    'mode_edit',
    'edit_road',
    'gps_off',
    'skip_next',
    'widgets',
    'view_compact',
    'recent_actors',
    'bus_alert',
    'disc_full',
    'rotate_90_degrees_ccw',
    'keyboard_hide',
    'crop_landscape',
    'crop_16_9',
    'sports_rugby',
    'move_to_inbox',
    'notifications_active',
    'device_thermostat',
    'fence',
    'category',
    'live_tv',
    'handyman',
    'reduce_capacity',
    'subscriptions',
    'local_pharmacy',
    'panorama_horizontal',
    'border_inner',
    'receipt_long',
    'check',
    'table_chart',
    'looks_two',
    'cloud_queue',
    'warning',
    'wifi_calling',
    'notifications_paused',
    'gradient',
    'sms_failed',
    'low_priority',
    'business_center',
    'family_restroom',
    'format_align_right',
    'bluetooth',
    'skip_previous',
    'video_settings',
    'near_me_disabled',
    'call_received',
    'space_bar',
    'playlist_add_check',
    'party_mode',
    'functions',
    'hdr_enhanced_select',
    'upload_file',
    'priority_high',
    'ev_station',
    'fast_forward',
    'bubble_chart',
    'email',
    'wifi',
    'crop_original',
    'timer_off',
    'import_contacts',
    'drafts',
    'watch',
    'add_business',
    'add_road',
    'pest_control_rodent',
    'create_new_folder',
    'format_list_numbered_rtl',
    '360',
    'domain',
    'image_not_supported',
    'cell_wifi',
    'railway_alert',
    'local_atm',
    'select_all',
    'palette',
    'replay',
    'text_format',
    'thumb_up_alt',
    'add',
    'present_to_all',
    'directions',
    'dvr',
    'sports_hockey',
    'video_call',
    'personal_video',
    'arrow_upward',
    'movie_filter',
    'bluetooth_audio',
    'first_page',
    'repeat_on',
    'local_gas_station',
    'close',
    'show_chart',
    'people',
    'more_horiz',
    'dialpad',
    'auto_awesome',
    'architecture',
    'airplanemode_active',
    'how_to_vote',
    'call_missed',
    'menu_open',
    'keyboard_arrow_left',
    'screen_lock_rotation',
    'crop_7_5',
    'looks_3',
    'pages',
    'star_border',
    'all_inclusive',
    'mic',
    'exposure_neg_2',
    'invert_colors_off',
    'signal_cellular_alt',
    'tram',
    'snooze',
    'keyboard_backspace',
    'sports_tennis',
    'location_city',
    'add_call',
    'app_registration',
    'laptop_mac',
    'wifi_lock',
    'bluetooth_disabled',
    'domain_verification',
    'volume_down',
    'refresh',
    'tag_faces',
    'text_snippet',
    'local_shipping',
    'free_breakfast',
    'amp_stories',
    'design_services',
    'sports_handball',
    'person_pin_circle',
    'headset_off',
    'compare',
    'no_flash',
    'tv_off',
    'image',
    'directions_walk',
    'content_cut',
    'attach_money',
    'food_bank',
    'save',
    'checkroom',
    'navigation',
    'sports_soccer',
    'keyboard_return',
    'filter_hdr',
    'emoji_food_beverage',
    'arrow_drop_down',
    'replay_5',
    'phone_iphone',
    'gps_not_fixed',
    'shuffle_on',
    'mobile_screen_share',
    'crop_5_4',
    'emoji_flags',
    'navigate_before',
    'format_indent_increase',
    'badge',
    'grid_view',
    'folder_shared',
    'sports_kabaddi',
    'leak_remove',
    'crop_din',
    'flash_on',
    'content_copy',
    'panorama_horizontal_select',
    'device_hub',
    'airplanemode_inactive',
    'exposure_neg_1',
    'lunch_dining',
    'gesture',
    'pedal_bike',
    'library_add',
    'message',
    'do_not_disturb_alt',
    'superscript',
    'subdirectory_arrow_left',
    'forward_to_inbox',
    'call_to_action',
    'hdr_on',
    'leak_add',
    'style',
    'crop_3_2',
    'wb_incandescent',
    'phone_locked',
    'local_drink',
    'report',
    'format_color_text',
    'drive_folder_upload',
    'chat',
    'phonelink_erase',
    'delivery_dining',
    'thumb_down_alt',
    'drive_file_move_outline',
    'local_mall',
    'dirty_lens',
    'child_friendly',
    'filter_frames',
    'send',
    'wrong_location',
    'blur_linear',
    'expand_more',
    'speaker',
    'play_circle_outline',
    'facebook',
    'cases',
    'sports_basketball',
    'publish',
    'person_add_alt_1',
    'network_cell',
    'switch_left',
    'auto_awesome_mosaic',
    'screen_lock_portrait',
    'camera',
    'rotate_left',
    'confirmation_number',
    'redo',
    'device_unknown',
    'electric_moped',
    'chat_bubble_outline',
    'carpenter',
    'file_copy',
    'groups',
    'motion_photos_pause',
    'merge_type',
    'hail',
    'battery_alert',
    'loop',
    'signal_cellular_connected_no_internet_4_bar',
    'looks_5',
    'settings_system_daydream',
    'bluetooth_connected',
    'security',
    'post_add',
    'more',
    'stay_current_portrait',
    'insert_chart',
    'museum',
    'set_meal',
    'rate_review',
    'ac_unit',
    'iso',
    'video_label',
    'crop_rotate',
    'border_right',
    'textsms',
    'point_of_sale',
    'video_library',
    'filter_9_plus',
    'flare',
    'single_bed',
    'attachment',
    'transfer_within_a_station',
    'sick',
    'border_vertical',
    'mic_off',
    'child_care',
    'unfold_more',
    'call_split',
    'directions_subway',
    'signal_cellular_0_bar',
    'switch_right',
    'control_camera',
    'filter_vintage',
    'no_food',
    'shutter_speed',
    'format_textdirection_l_to_r',
    'bluetooth_searching',
    'memory',
    'bento',
    'stairs',
    'flash_off',
    'star_outline',
    'contacts',
    'collections',
    'construction',
    'looks_4',
    'signal_wifi_4_bar_lock',
    'flip_camera_android',
    'photo_camera',
    'star',
    'format_list_bulleted',
    'add_ic_call',
    'navigate_next',
    'public_off',
    'no_meeting_room',
    'mobile_friendly',
    'arrow_back_ios',
    'hdr_weak',
    'text_fields',
    'flip_camera_ios',
    'kitchen',
    'notifications_none',
    'cloud_circle',
    'engineering',
    'edit',
    'soap',
    'wheelchair_pickup',
    'toggle_on',
    'fullscreen_exit',
    'format_list_numbered',
    'wc',
    'music_video',
    'ramen_dining',
    'looks_6',
    'brightness_auto',
    'local_see',
    'hardware',
    'brunch_dining',
    'tonality',
    'stay_primary_landscape',
    'keyboard_arrow_right',
    'phone_disabled',
    'do_not_disturb',
    'beach_access',
    'no_meals',
    'mark_email_read',
    'airline_seat_flat_angled',
    'airline_seat_legroom_extra',
    'play_disabled',
    'hdr_strong',
    'sort_by_alpha',
    'format_line_spacing',
    'legend_toggle',
    'my_location',
    'margin',
    'block_flipped',
    'topic',
    'slow_motion_video',
    'timer_10',
    'vertical_align_top',
    'no_cell',
    'car_repair',
    'content_paste',
    'local_hospital',
    'adjust',
    'restaurant_menu',
    'emoji_nature',
    'looks',
    'looks_one',
    'equalizer',
    'corporate_fare',
    'clear_all',
    'format_align_justify',
    'dinner_dining',
    'follow_the_signs',
    'room_service',
    'people_alt',
    'filter_list',
    'auto_delete',
    'local_police',
    'power_off',
    'format_indent_decrease',
    'nature_people',
    'sync_disabled',
    'image_search',
    'unsubscribe',
    'request_quote',
    'border_style',
    'computer',
    'airport_shuttle',
    'wash',
    'wb_shade',
    'south_east',
    'do_not_touch',
    'graphic_eq',
    'attach_file',
    'blur_on',
    'keyboard_voice',
    'height',
    'portable_wifi_off',
    'foundation',
    'meeting_room',
    'golf_course',
    'fitness_center',
    'auto_fix_normal',
    'vignette',
    'contact_mail',
    'phonelink_setup',
    'edit_attributes',
    'phone_callback',
    'repeat_one_on',
    'videogame_asset',
    'local_convenience_store',
    'texture',
    'subdirectory_arrow_right',
    'router',
    'phone_bluetooth_speaker',
    'no_backpack',
    'phone',
    'icecream',
    'camera_alt',
    'person_remove_alt_1',
    'no_sim',
    'pivot_table_chart',
    'theater_comedy',
    'people_outline',
    'sync',
    'two_wheeler',
    'call',
    'rotate_right',
    'waves',
    'pause_presentation',
    'person_remove',
    'cloud_off',
    'web',
    'remove_red_eye',
    'fire_extinguisher',
    'short_text',
    'workspaces_outline',
    'local_offer',
    'sentiment_neutral',
    'format_size',
    'delete_sweep',
    'local_grocery_store',
    'waterfall_chart',
    'masks',
    'brightness_1',
    'signal_cellular_null',
    'enhanced_encryption',
    'add_a_photo',
    'closed_caption_disabled',
    'nature',
    'panorama_photosphere',
    'cleaning_services',
    'outlined_flag',
    'featured_play_list',
    'grain',
    'queue_play_next',
    'share',
    'add_box',
    'wifi_off',
    'album',
    'vpn_lock',
    'qr_code',
    'hd',
    'burst_mode',
    'money',
    'gps_fixed',
    'imagesearch_roller',
    'subway',
    'sort',
    'storage',
    'electrical_services',
    'import_export',
    'folder_open',
    'image_aspect_ratio',
    'remove',
    'explicit',
    'brightness_3',
    'traffic',
    'undo',
    'cancel_presentation',
    'business',
    'sports_bar',
    'panorama_vertical_select',
    'tablet_android',
    'south_west',
    'auto_fix_high',
    'sd_card',
    'local_airport',
    'connected_tv',
    'replay_10',
    'filter',
    'insert_link',
    'cast_connected',
    'rule_folder',
    'person_pin',
    'airline_seat_recline_normal',
    'ios_share',
    'comment',
    'directions_off',
    'electric_bike',
    'check_box',
    'border_bottom',
    'stop_screen_share',
    'face_retouching_natural',
    'event_note',
    'network_check',
    'insert_comment',
    'reply_all',
    'unfold_less',
    'tune',
    'payments',
    'linked_camera',
    'laptop',
    'switch_account',
    'mood_bad',
    'stacked_bar_chart',
    'weekend',
    'add_alert',
    'call_merge',
    'brightness_2',
    'add_to_queue',
    'hourglass_bottom',
    'scanner',
    'add_circle',
    'notifications',
    'featured_video',
    'room_preferences',
    'maps_ugc',
    'add_to_photos',
    'snippet_folder',
    'connect_without_contact',
    'screen_share',
    'local_parking',
    'no_stroller',
    'cloud',
    'tty',
    'report_off',
    'king_bed',
    'add_comment',
    'shuffle',
    'flash_auto',
    'error',
    'compass_calibration',
    'auto_fix_off',
    'panorama_photosphere_select',
    'control_point_duplicate',
    'airline_seat_legroom_reduced',
    'no_transfer',
    'format_bold',
    'drag_handle',
    'sensor_door',
    'phone_paused',
    'brightness_6',
    'pause',
    'add_to_home_screen',
    'format_shapes',
    'arrow_forward',
    'domain_disabled',
    'exposure',
    'next_week',
    'forward',
    'flip',
    'format_clear',
    'mic_external_on',
    'play_circle_filled',
    'photo_filter',
    'battery_full',
    'sports_motorsports',
    'add_photo_alternate',
    'music_note',
    'more_vert',
    'transit_enterexit',
    'assistant_photo',
    'tablet',
    'takeout_dining',
    'slideshow',
    'stay_primary_portrait',
    'elevator',
    'dry_cleaning',
    'score',
    'sim_card_alert',
    'format_color_fill',
    'square_foot',
    'coronavirus',
    'airline_seat_legroom_normal',
    'not_listed_location',
    'tablet_mac',
    'no_meals_ouline',
    'alt_route',
    'camera_front',
    'forward_30',
    'brightness_7',
    'no_luggage',
    'pie_chart_outlined',
    'sync_problem',
    'menu',
    'expand_less',
    'poll',
    'file_upload',
    'psychology',
    'play_arrow',
    'backspace',
    'dynamic_feed',
    'keyboard_tab',
    'format_paint',
    'web_asset',
    'high_quality',
    'add_chart',
    'spa',
    'clean_hands',
    'border_color',
    'electric_scooter',
    'mouse',
    'radio_button_checked',
    'block',
    'battery_unknown',
    'multiple_stop',
    'photo_library',
    'location_on',
    'person_add',
    'filter_8',
    'fiber_new',
    'deck',
    'plumbing',
    'streetview',
    'vibration',
    'grass',
    'phonelink_ring',
    'biotech',
    'brightness_5',
    'local_hotel',
    'battery_charging_full',
    'hdr_off',
    'grid_off',
    'celebration',
    'switch_video',
    'arrow_forward_ios',
    'folder',
    'speaker_group',
    'local_bar',
    'night_shelter',
    'vertical_align_bottom',
    'signal_wifi_4_bar',
    'laptop_windows',
    'emoji_people',
    'timer',
    'gamepad',
    'monitor',
    'music_off',
    'radio_button_unchecked',
    'devices_other',
    'multiline_chart',
    'timer_3',
    'photo',
    'remove_circle',
    'local_play',
    'border_top',
    'volunteer_activism',
    'unarchive',
    'pin_drop',
    'qr_code_scanner',
    'mic_external_off',
    'airline_seat_flat',
    'call_end',
    'mobile_off',
    'emoji_symbols',
    'sanitizer',
    'brightness_4',
    'star_half',
    'new_releases',
    'elderly',
    'app_settings_alt',
    'access_alarms',
    'sentiment_satisfied_alt',
    'smoking_rooms',
    'filter_9',
    'vpn_key',
    'attractions',
    'escalator',
    'insert_invitation',
    'read_more',
    'insights',
    'emoji_transportation',
    'keyboard_capslock'
];

export default {
    title: 'TorqueButton',
    component: TorqueButton,
    argTypes: { 
        onClick: {
            action: 'clicked',
            name: 'On Click',
            description: 'Callback For Click Event'
        },
        text: {
            name: 'Button Text',
            type: {
                name: 'string',
                require: true
            },
            description: 'Button Text',
            control: {
                type: 'text'
            }
        },
        themeOverrides: {
            name: 'Theme Overrides',
            description: 'CSS Object properties to be replaced for this instance of the Torque Button',
            control: {
                type: 'object',
                defaultValue: {}
            }
        },
        icon: {
            name: 'Icon',
            description: 'Icon Path Or Component To Be Used For the Icon',
            control: {
                type: 'select',
                options: Icons
            }
        },
        iconPosition: {
            name: 'Icon Position',
            description: 'Icon Position whether left or right of the text.',
            control: {
                type: 'select',
                options: ['left', 'right', 'only', 'none']
            }
        },
        animation: {
            name: 'Animation',
            description: 'Select the animation to use',
            control: {
                type: 'select',
                option: ['none', 'material-ripple', 'highlight-text']
            }
        },
        identifier: {
            name: 'Identifier',
            description: 'Theme identifier',
            control: {
                type: 'text',
            }
        }
    },
    args: {
        text: 'Click Me',
        icon: '360',
        iconPosition: 'right',
        animation: 'material-ripple',
        identifier: 'basic',
        themeOverrides: {},
    } as TorqueButtonProps
}


const Button: ComponentStory<typeof TorqueButton> = (args: TorqueButtonProps) => {
    TorqueService.setTheme(DefaultThemes.CERULEAN);
    return (
        <TorqueButton {...args} />
    );
};
export const _TorqueButtonBasic = Button.bind({});

const ButtonIcon: ComponentStory<typeof TorqueButton> = (args: TorqueButtonProps) => {
    TorqueService.setTheme(DefaultThemes.CERULEAN);
    return (
        <TorqueButton 
            {...args} 
            text=''
            icon='360'
            iconPosition='only'
            animation='material-ripple'
            identifier='icon-only' />
    );
};
export const _TorqueButtonIcon = ButtonIcon.bind({});


const ButtonOverride: ComponentStory<typeof TorqueButton> = (args: TorqueButtonProps) => {
    TorqueService.setTheme(DefaultThemes.CERULEAN);
    return (
        <TorqueButton {...args} themeOverrides={{ default: { color: 'black', background: 'pink' } }} />
    );
};
export const _TorqueButtonOverride = ButtonOverride.bind({});


const ButtonFlexColumn: ComponentStory<typeof TorqueButton> = (args: TorqueButtonProps) => {
    TorqueService.setTheme(DefaultThemes.CERULEAN);
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            <TorqueButton {...args} />
        </div>
    );
}
export const _TorqueButtonFlexColumn = ButtonFlexColumn.bind({})

const ButtonFlexRow: ComponentStory<typeof TorqueButton> = (args: TorqueButtonProps) => {
    TorqueService.setTheme(DefaultThemes.CERULEAN);
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
            <TorqueButton {...args} />
        </div>
    );
}
export const _TorqueButtonFlexRow = ButtonFlexRow.bind({})