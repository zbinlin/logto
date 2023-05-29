const user_details = {
  page_title: '用戶詳情',
  back_to_users: '返回用戶管理',
  created_title: '用戶創建成功',
  created_guide: '這是用戶登錄過程中的信息。',
  created_email: '電子郵箱地址：',
  created_phone: '手機號碼：',
  created_username: '用戶名：',
  created_password: '密碼：',
  menu_delete: '刪除用戶',
  delete_description: '本操作將永久刪除該用戶，且無法撤銷。',
  deleted: '用戶已成功刪除。',
  reset_password: {
    reset_password: '重置密碼',
    title: '確定要重置密碼？',
    content: '本操作不可撤銷，將會重置用戶的登錄信息。',
    congratulations: '該用戶已被重置',
    new_password: '新密碼：',
  },
  tab_settings: '設置',
  tab_roles: '角色',
  tab_logs: '用戶日誌',
  settings: '設置',
  settings_description:
    '每個用戶都有一個包含所有用戶信息的個人資料。它由基本數據、社交身份和自定義數據組成。',
  field_email: '電子郵箱',
  field_phone: '手機號碼',
  field_username: '用戶名',
  field_name: '姓名',
  field_avatar: '頭像圖片鏈接',
  field_avatar_placeholder: 'https://your.cdn.domain/avatar.png',
  field_custom_data: '自定義數據',
  field_custom_data_tip: '預定義屬性之外的用戶信息，例如用戶偏好的顏色和語言。',
  field_connectors: '社交帳號',
  custom_data_invalid: '自定義數據必須是有效的 JSON 對象',
  connectors: {
    connectors: '連接器',
    user_id: '用戶ID',
    remove: '刪除',
    not_connected: '該用戶還沒有綁定社交帳號',
    deletion_confirmation: '你在正要刪除現有的 <name /> 身份，是否確認？',
  },
  suspended: '已禁用',
  suspend_user: '禁用用户',
  suspend_user_reminder:
    '你确定要禁用该用户？该用户将无法登录你的应用程序，并且在当前令牌过期后将无法获取新的访问令牌。此外，该用户发出的任何 API 请求都将失败。',
  suspend_action: '禁用',
  user_suspended: '用戶已被暫時禁用。',
  reactivate_user: '重新啓用用户',
  reactivate_user_reminder: '你确定要重新啟用該用户？這樣做將允許該用户的任何登錄嘗試。',
  reactivate_action: '重新啓用',
  user_reactivated: '用戶已重新啟用。',
  roles: {
    name_column: '角色名稱',
    description_column: '描述',
    assign_button: '分配角色',
    delete_description: '此操作將從此用戶中刪除此角色。角色本身仍將存在，但不再與此用戶相關聯。',
    deleted: '已成功將 {{name}} 從此用戶中刪除。',
    assign_title: '將角色分配給 {{name}}',
    assign_subtitle: '為 {{name}} 授權一個或多個角色',
    assign_role_field: '分配角色',
    role_search_placeholder: '按角色名稱搜索',
    added_text: '添加了 {{value, number}} 個',
    assigned_user_count: '{{value, number}} 個用戶',
    confirm_assign: '分配角色',
    role_assigned: '已成功分配角色',
    search: '按角色名稱、描述或 ID 搜索',
    empty: '無可用角色',
  },
  warning_no_sign_in_identifier:
    '用戶需要至少擁有一個登錄標識（用戶名、電子郵件、電話號碼或社交帳號）才能登錄。確定要繼續嗎？',
};

export default user_details;
