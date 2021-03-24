module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_URL:
    process.env.DATABASE_URL+'?sslmode=require' || 'postgresql://tarapatel@localhost/dnd-creator',
  TEST_DB_URL:
    process.env.TEST_DB_URL || 'postgresql://tarapatel@localhost/dnd-creator',
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRY: process.env.JWT_EXPIRY
};
