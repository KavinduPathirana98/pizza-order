package com.cw.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cw.entity.LoyaltyAccount;

@Repository
public interface LoyaltyAccountRepository extends JpaRepository<LoyaltyAccount, Integer> {

    @Query("SELECT * FROM LoyaltyAccount L WHERE L.userId = :userId")
    LoyaltyAccount findLoyaltyAccountByUserId(@Param("userId") int userId);
}
