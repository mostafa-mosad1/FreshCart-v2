"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Box, 
  IconButton, 
  InputBase, 
  Typography, 
  Chip,
  Divider,
  useTheme,
  CircularProgress
} from "@mui/material";
import {
  Search as SearchIcon,
  Close as CloseIcon} from "@mui/icons-material";

interface SearchBarProps {
  onSearch: (query: string) => void;
  totalResults: number;
}



function MainSearch({ onSearch, totalResults }: SearchBarProps) {

    const [isExpanded, setIsExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const theme = useTheme();
  
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value;
      setSearchQuery(query);
      setIsSearching(true);
      onSearch(query);
      setTimeout(() => setIsSearching(false), 300);
    };
  
    const clearSearch = () => {
      setSearchQuery("");
      onSearch("");
    };
  
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsExpanded(false);
      }
    };
  

  return (
    <>
     
      <Box sx={{ position: "relative", width: "100%", maxWidth: "800px", mx: "auto", px: 2 }}>
      <motion.div
        initial={false}
        animate={{
          width: isExpanded ? "100%" : "48px",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: isExpanded 
              ? theme.palette.background.paper 
              : theme.palette.grey[100],
            borderRadius: isExpanded ? "9999px" : theme.shape.borderRadius,
            boxShadow: isExpanded ? theme.shadows[3] : "none",
            overflow: "hidden",
            width: "100%"
          }}
        >
          <IconButton
            onClick={() => setIsExpanded(!isExpanded)}
            sx={{
              width: 56,
              height: 56,
              color: theme.palette.text.secondary,
              "&:hover": {
                color: theme.palette.text.primary,
              }
            }}
          >
            <SearchIcon />
          </IconButton>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ flex: 1 }}
              >
                <InputBase
                  fullWidth
                  placeholder="Search anything..."
                  sx={{
                    height: 56,
                    px: 2,
                    fontSize: "1.125rem",
                    color: theme.palette.text.primary,
                  }}
                  value={searchQuery}
                  onChange={handleSearch}
                  onKeyDown={handleKeyDown}
                  autoFocus
                />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isExpanded && searchQuery && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <IconButton
                  onClick={clearSearch}
                  sx={{
                    color: theme.palette.text.secondary,
                    "&:hover": {
                      color: theme.palette.text.primary,
                    }
                  }}
                >
                  {isSearching ? (
                    <CircularProgress size={20} />
                  ) : (
                    <CloseIcon />
                  )}
                </IconButton>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              width: "100%",
              marginTop: theme.spacing(1),
              backgroundColor: theme.palette.background.paper,
              borderRadius: theme.shape.borderRadius * 2,
              boxShadow: theme.shadows[4],
              overflow: "hidden",
              zIndex: 50,
              backdropFilter: "blur(4px)",
              border: `1px solid ${theme.palette.divider}`
            }}
          >
            <Box sx={{ p: 3 }}>
              {searchQuery ? (
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Box sx={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "space-between" 
                  }}>
                    <Typography variant="body2" color="text.secondary">
                      Found{" "}
                      <Typography 
                        component="span" 
                        fontWeight="medium" 
                        color="text.primary"
                      >
                        {totalResults}
                      </Typography>{" "}
                      {totalResults === 1 ? "result" : "results"} for{" "}
                      <Typography 
                        component="span" 
                        color="primary.main"
                      >
                        "{searchQuery}"
                      </Typography>
                    </Typography>
                    {isSearching && (
                      <CircularProgress size={16} color="inherit" />
                    )}
                  </Box>
                  <Divider sx={{ 
                    background: `linear-gradient(to right, transparent, ${theme.palette.divider}, transparent)`,
                    height: 1 
                  }} />
                </Box>
              ) : (
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    Start typing to search through{" "}
                    <Typography component="span" fontWeight="medium" color="text.primary">
                      {totalResults}
                    </Typography>{" "}
                    items
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Chip 
                      label="Press Enter to search" 
                      size="small" 
                      sx={{ bgcolor: "grey.100" }} 
                    />
                    <Chip 
                      label="ESC to close" 
                      size="small" 
                      sx={{ bgcolor: "grey.100" }} 
                    />
                  </Box>
                </Box>
              )}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
    </>
  );
}

export default MainSearch;
